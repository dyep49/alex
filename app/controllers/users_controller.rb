class UsersController < ApplicationController

    def faved
        render json: current_user.favorites
    end

    def pinned
        render json: Pin.where({user_id: current_user.id})
    end

    def share
        share = Share.new
        share.from_user_id = current_user.id
        share.to_user_id = User.find_by_username(params[:sendTo])
        share.save

        render json: {status: 200}
    end

end