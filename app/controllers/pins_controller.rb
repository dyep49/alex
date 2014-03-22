class PinsController < ApplicationController

    def fetch
        #output = Pin.find(params stuff)
        # return that as json
    end

    def create
        binding.pry
        pin = Pin.make_pin(params, (current_user ? current_user.id : nil))
        Source.find(params["source_id"]["id"]).pins << pin
        render json: {id: pin.id}
    end

    def update
    end

    def show
        pin = Pin.find(params[:id])
        history = History.new
        history.user_id = current_user.id
        history.pin_id = pin.id
        history.save

        render json: [{
            pin: pin,
            saved: Favorite.where([
                "user_id = ? and pin_id = ?",
                pin.id,
                current_user.id
            ]).any?
        }]  
    end

    def destroy
    end

    def favorite
        pin = Pin.find(params[:id])
        fav = Favorite.where(["user_id = ? and pin_id = ?",
                pin.id,
                current_user.id])
        if fav.any?
            fav.each(&:delete)
        else
            fav = Favorite.new
            fav.user = current_user
            fav.pin  = pin
            fav.save!
        end
        render json: {}
    end

    def search
        title = Pin.find_by_fuzzy_title(params[:search], :limit => 20)
        url = Pin.find_by_fuzzy_url(params[:search], :limit => 20)
        desc = Pin.find_by_fuzzy_description(params[:search], :limit => 20)

        render json: {title: title, url: url, description: desc}
    end



end