class UsersController < ApplicationController

    def share
        share = Share.new
        share.from_user_id = current_user.id
        share.to_user_id = User.find_by_username(params[:sendTo]).id
        share.from_user_name = current_user.username
        share.pin_id = params[:pin_id]
        share.save

        render json: {status: 200}
    end

    def logout
        sign_out_and_redirect('/users/sign_in')
    end

    def my_pins
        render json: Pin.where(user_id: current_user.id)
    end

    def get_inbox
        render json: Share.where(to_user_id: current_user.id)
    end

    def find_user
        render json: User.find(params[:user_id])
    end

    def history
        output = current_user.histories.map do |hist|
            Pin.find(hist.pin_id)
        end
        render json: output.reverse
    end

    def faved
        output = current_user.favorites.map do |hist|
            Pin.find(hist.pin_id)
        end
        render json: output
    end

end