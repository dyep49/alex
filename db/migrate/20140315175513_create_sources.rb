class CreateSources < ActiveRecord::Migration
  def change
    create_table :sources do |t|
        t.string :url

        t.boolean :feed_embedly
        t.boolean :solo_embedly

        t.timestamps
    end
  end
end
