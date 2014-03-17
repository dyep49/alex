class SourcesController < ApplicationController

	def index
		binding.pry
		render json: Source.all
	end



end