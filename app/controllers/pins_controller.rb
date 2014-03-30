class PinsController < ApplicationController

    def create
        binding.pry
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
        q = params[:search].downcase

        title = []
        url = []
        desc = []

        Pin.all.each do |pin|
            title << {pin: pin, score: pin.title.downcase.pair_distance_similar(q)}
            url << {pin: pin, score: pin.url.downcase.pair_distance_similar(q)}
            desc << {pin: pin, score: pin.description.downcase.pair_distance_similar(q)}
        end

        grab_pin = Proc.new do |hash|
            hash[:pin] if hash[:score] > 0
        end

        title = title.sort_by! {|k| k[:score]}.pop(10).reverse.map(&grab_pin)
        url   =   url.sort_by! {|k| k[:score]}.pop(10).reverse.map(&grab_pin)
        desc  =  desc.sort_by! {|k| k[:score]}.pop(10).reverse.map(&grab_pin)

        render json: {title: title, url: url, description: desc}
    end

    def next
        if params[:tag_name] == "source"
            source = Source.find(params[:source_id])
            pins = source.pins.order(id: :asc)
        else
            if params[:tag_name] == "all"
                pins = Pin.all.order(id: :asc)
            else
                pins = Tag.find_by_name(params[:tag_name]).pins.order(id: :asc)
            end
        end
        current_index = pins.index(pins.find(params[:pin_id]))
        if params[:direction] == "next" && (current_index == (pins.count - 1))
            render json: pins[0]
        elsif params[:direction] == "next"
            render json: pins[current_index + 1]
        else 
            render json: pins[current_index - 1]
        end
    end

    def destroy
        pin = Pin.find(params[:id])
        pin.destroy!
        History.where(pin_id: params[:id]).delete_all
        Share.where(pin_id: params[:id]).delete_all
        Favorite.where(pin_id: params[:id]).delete_all
        render json: {}
    end

    def tags
        if params[:tag_name] == 'all'
            render json: Pin.all 
        else
            tag = Tag.find_by_name(params[:tag_name])
            render json: tag.pins
        end
    end

    def edit
        stuff =  params[:pin][0][:pin]
        pin = Pin.find(stuff[:id])
        pin.title = stuff[:title]
        pin.description = stuff[:description]
        pin.source_id = stuff[:source_id]
        pin.url = stuff[:url]
        pin.image_url = stuff[:image_url]
        pin.save
        pin.tags.delete_all
        pin.make_tags(pin, params[:tags])
        render json: {}
    end

end