class Pin < ActiveRecord::Base
  belongs_to :user
  belongs_to :source
  has_many :pin_tags
  has_many :tags, through: :pin_tags

  def self.make_pin(params)
    binding.pry
    pin = Pin.create(
      title: params[:title],
      description: params[:description],
      image_url: params[:image_url],
      url: params[:url]
    )

    pin.make_tags(params[:tags])
    pin.add_source(pin, params[:url])
  end

  def make_tags(tags)
    tags.split.each do |word|
      tag = Tag.find_by_name(word)
      pin.tags << tag || Tag.create(name: word)
    end
  end

  def add_source(pin, url)
    host = URI.parse(url).host || URI.parse("http://#{url}").host
    source = Source.find_by_url(host)
    if source
      pin.update(source_id: source.id)
    else
      Source.create
    end
  end
end
