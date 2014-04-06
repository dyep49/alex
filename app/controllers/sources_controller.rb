class SourcesController < ApplicationController

	def index	
		render json: Source.all
	end

	def show
		source = Source.where(cat: params[:id].downcase)
		render json: source
	end

	def source_pins
		id = params[:id]
		page_num = params[:page_number]
		case params[:sort_by]
		when "most_views"
out = Source.find(id).pins.page(page_num).per(10)
		when "most_recent"
out = Source.find(id).pins.page(page_num).per(10)
		else
out = Source.find(id).pins.page(page_num).per(10)
		end
		render json: out
	end

	def create
		if current_user.admin == true
			if params[:cat] == nil || params[:cat][:name] == 'Other'
				source = Source.create(img_url: params[:img_url], url: params[:url], name: params[:name], cat: 'other')
			else
				source = Source.create(img_url: params[:img_url], url: params[:url], name: params[:name], cat: params[:cat][:name].downcase)
			end
		end
		render nothing: true
	end



end