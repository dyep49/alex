class Tag < ActiveRecord::Base
    has_and_belongs_to_many :pins, though: :pin_tag
end
