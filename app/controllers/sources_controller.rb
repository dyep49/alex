class SourcesController < ApplicationController

	def index	
		render json: Source.all
	end

	def show
		id = params[:id]
		page_num = params[:page_number]
		case params[:sort_by]
		when "most_views"
			out = Pin.where(source_id: id).order(view_count: :desc).page(page_num).per(10)
		when "most_recent"
			out = Pin.where(source_id: id).order(created_at: :desc).page(page_num).per(10)
		else
			out = Pin.where(source_id: id).page(page_num).per(10)
		end
		render json: out
	end

	def create
		if current_user.admin == true
			if params[:cat] == nil || params[:cat][:name] == 'Other'
				source = Source.create(img_url: params[:img_url], url: params[:url], name: params[:name])
			else
				source = Source.create(img_url: params[:img_url], url: params[:url], name: params[:name], cat: Tag.find_by_name(params[:cat][:name].downcase))
			end
		end
		render nothing: true
	end



end