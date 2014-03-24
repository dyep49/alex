class PinsController < ApplicationController

    def fetch
        #output = Pin.find(params stuff)
        # return that as json
    end

    def create
        if current_user && current_user.admin
            pin = Pin.make_pin(params, current_user.id)
            Source.find(params["source_id"]["id"]).pins << pin
            render json: {id: pin.id}
        else
            redirect_to '/'
        end
    end

    def update
    end

    def show
        pin = Pin.find(params[:id])
        pin.view_count += 1
        pin.save!

        history = History.where([
            "user_id = ? and pin_id = ?",
            current_user.id,
            pin.id
        ])

        if history.any?
            history.each(&:touch)
        else
            history = History.new
            history.user_id = current_user.id
            history.pin_id = pin.id
            history.save
        end

        render json: [{
            pin: pin,
            saved: Favorite.where([
                "user_id = ? and pin_id = ?",
                current_user.id,
                pin.id
            ]).any?
        }]  
    end

    def destroy
    end

    def favorite
        pin = Pin.find(params[:id])
        fav = Favorite.where(["user_id = ? AND pin_id = ?",
                current_user.id,
                pin.id])
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

    def next
        source = Source.find(params[:source_id])
        pins = source.pins.order(id: :asc)
        current_index = pins.index(pins.find(params[:pin_id]))
        if params[:direction] == "next"
            render json: pins[current_index + 1]
        else 
            render json: pins[current_index -1]
        end
    end

    # def add_view
    #     history = History.new
    #     history.pin_id = params[:id]
    #     history.user_id = current_user.id
    #     history.save!

    #     render json: {}
    # end



end