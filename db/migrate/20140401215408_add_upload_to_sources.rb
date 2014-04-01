class AddUploadToSources < ActiveRecord::Migration
  def self.up
    add_attachment :sources, :upload
  end

  def self.down
    remove_attachment :sources, :upload
  end
end
    