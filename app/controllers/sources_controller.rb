class SourcesController < ApplicationController

	def index	
		render json: Source.all
	end

	def show
		if params[:id].scan(/[0-9]+/).any?
			params[:id] = params[:id].to_i 
			source = Source.find(params[:id])
			render json: [source]
		else
			source = Source.where(cat: params[:id].downcase)
			render json: source.reverse
		end
	end

	def source_pins
		id = params[:id]
		page_num = params[:page_number]
		case params[:sort_by]
		when "most_views"
			out = Source.find(id).pins.order(view_count: :desc).page(page_num).per(10)
		when "most_recent"
			out = Source.find(id).pins.order(created_at: :desc).page(page_num).per(10)
		when "week"
			out = Source.find(id).pins.where('created_at >= ?', 1.week.ago).order(view_count: :desc).page(page_num).per(10)
		when "month"
			out = Source.find(id).pins.where('created_at >= ?', 1.month.ago).order(view_count: :desc).page(page_num).per(10)
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