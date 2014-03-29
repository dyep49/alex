class CreateSources < ActiveRecord::Migration
  def change
    create_table :sources do |t|
        t.string :url
        t.string :img_url
        t.string :name
        t.string :cat

        t.timestamps
    end
  end
end
