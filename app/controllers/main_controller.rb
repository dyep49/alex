class MainController < ApplicationController
  def index
      redirect_to '/users/sign_in' unless current_user
  end

  def image
      s3 = AWS::S3.new
      bucket = s3.buckets['alex_trolly']
      key = (Time.new.to_s + rand.to_s).gsub(/[\:\-\ \.\+]/, '')
      obj = bucket.objects[key].write(params[:file].open)
      render json: {url: ('https://s3.amazonaws.com/alex_trolly/' + key)}
  end
end