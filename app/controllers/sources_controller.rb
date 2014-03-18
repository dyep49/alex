class SourcesController < ApplicationController

	def index	
		render json: Source.all
	end

	def show
		render json: Pin.where(source_id: params[:id])
	end

	def create 
		binding.pry
		source = Source.create(img_url: params[:img_url], url: params[:url], name: params[:name])
		render json: {id: source.id}
	end



end