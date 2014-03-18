class CreateSources < ActiveRecord::Migration
  def change
    create_table :sources do |t|
        t.string :url
        t.string :img_url
        t.string :name
        t.boolean :feed_embedly
        t.boolean :solo_embedly_full

        t.timestamps
    end
  end
end
