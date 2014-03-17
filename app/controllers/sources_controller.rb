class SourcesController < ApplicationController

	def index	
	
		render json: Source.all
	end

	def show
		render json: Pin.where(source_id: params[:id])
	end



end