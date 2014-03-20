class Pin < ActiveRecord::Base
  belongs_to :user
  belongs_to :source
  has_many :pin_tags
  has_many :favorites
  has_many :tags, through: :pin_tags

  fuzzily_searchable :title, :url, :description 

  def self.make_pin(params, user_id)
    pin = Pin.create(
      title: params[:title],
      description: params[:description],
      image_url: params[:image_url],
      url: params[:url],
      user_id: user_id,
      source_id: params[:source_id]
    )
    pin.make_tags(pin, params[:tags])
    return pin
  end

  def make_tags(pin, tags)
    tags.split.each do |word|
      tag = Tag.find_by_name(word)
      pin.tags << (tag || Tag.create(name: word))
    end
  end

end
