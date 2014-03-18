class RenameSavesToFavorites < ActiveRecord::Migration
  def change
    rename_table :saves, :favorites
  end
end
