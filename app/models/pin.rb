class Pin < ActiveRecord::Base
  belongs_to :user
  belongs_to :source
  has_many :pin_tags
  has_many :tags, through: :pin_tags

  def self.make_pin(params, user_id)
    pin = Pin.create(
      title: params[:title],
      description: params[:description],
      image_url: params[:image_url],
      url: params[:url],
      user_id: user_id
    )
    pin.make_tags(pin, params[:tags])
    pin.add_source(pin, params[:url])
    return pin
  end

  def make_tags(pin, tags)
    tags.split.each do |word|
      tag = Tag.find_by_name(word)
      pin.tags << (tag || Tag.create(name: word))
    end
  end

  def add_source(pin, url)
    host = URI.parse(url).host || URI.parse("http://#{url}").host
    source = Source.find_by_url(host) || Source.create(url: host)
    pin.update(source_id: source.id)
  end
end
