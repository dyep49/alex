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

    def save
        binding.pry
    end


end