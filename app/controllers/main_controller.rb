class MainController < ApplicationController
  def index
      redirect_to '/users/sign_in' unless current_user
  end

  def image
      binding.pry
  end
end
