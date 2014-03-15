class Tag < ActiveRecord::Base
    has_and_belongs_to_many :pins, through: :pin_tag
end
