class Pin < ActiveRecord::Base
  belongs_to :user
  belongs_to :source
  has_many :pin_tags
  has_many :favorites
  has_many :histories
  has_many :tags, through: :pin_tags



  def self.make_pin(params, user_id)
    pin = Pin.create(
      user_id:      user_id,
      url:          params[:url],
      title:        params[:title],
      image_url:    params[:image_url],
      source_id:    params[:source_id],
      description:  params[:description]
    )
    pin.make_tags(pin, params[:tags])
    return pin
  end

  def make_tags(pin, tags)
    if tags
      tags.gsub!(' ','')
      tags.split(',').each do |word|
        tag = Tag.find_by_name(word.downcase)
        pin.tags << (tag || Tag.create(name: word.downcase))
      end
    end
  end

end
