class SourcesController < ApplicationController

	def index	
		render json: Source.all
	end

	def show
		sort = params[:sort_by]
		case sort
		when "most_views"
			render json: Pin.where(source_id: params[:id]).order(view_count: :desc).page(params[:page_number]).per(10)
		when "most_recent"
			render json: Pin.where(source_id: params[:id]).order(created_at: :desc).page(params[:page_number]).per(10)
		else
			render json: Pin.where(source_id: params[:id]).page(params[:page_number]).per(10)
		end
	end

	def create 
		source = Source.create(img_url: params[:img_url], url: params[:url], name: params[:name])
		render json: {id: source.id}
	end



end