class PinsController < ApplicationController

    def fetch
        #output = Pin.find(params stuff)
        # return that as json
    end

    def create
        pin = Pin.make_pin(params, (current_user ? current_user.id : nil))
        render json: {id: pin.id}
    end

    def update
    end

    def show
        render json: [Pin.find(params[:id])]
    end

    def destroy
    end

    def favorite
        fav = Favorite.new
        fav.user = current_user
        fav.pin  = Pin.find(params[:id])
        fav.save!
        
        render json: {}
    end

    def search
        title = Pin.find_by_fuzzy_title(params[:search], :limit => 20)
        url = Pin.find_by_fuzzy_url(params[:search], :limit => 20)
        desc = Pin.find_by_fuzzy_description(params[:search], :limit => 20)

        render json: {title: title, url: url, description: desc}
    end



end