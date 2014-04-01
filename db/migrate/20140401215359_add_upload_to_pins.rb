class AddUploadToPins < ActiveRecord::Migration
  def self.up
    add_attachment :pins, :upload
  end

  def self.down
    remove_attachment :pins, :upload
  end
end
