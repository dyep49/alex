class Tag < ActiveRecord::Base
    has_many :pin_tags
    has_many :pins, through: :pin_tag
end
