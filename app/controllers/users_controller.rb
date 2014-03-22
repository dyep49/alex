class UsersController < ApplicationController

    def faved
        render json: current_user.favorites
    end

    def pinned
        render json: Pin.where({user_id: current_user.id})
    end

    def share
        binding.pry
        share = Share.new
        share.from_user_id = current_user.id
        share.to_user_id = User.find_by_username(params[:sendTo]).id
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

end