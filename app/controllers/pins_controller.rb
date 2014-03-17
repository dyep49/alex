class PinsController < ApplicationController

    def fetch
        #output = Pin.find(params stuff)
        # return that as json
    end

    def create
    end

    def update
    end

    def show
        render json: [Pin.find(params[:id])]
    end

    def destroy
    end

end