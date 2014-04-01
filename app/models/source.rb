class Source < ActiveRecord::Base
    has_many :pins

    has_attached_file :upload

    # Validate the attached image is image/jpg, image/png, etc
    validates_attachment_content_type :upload, :content_type => /\Aimage\/.*\Z/
end
