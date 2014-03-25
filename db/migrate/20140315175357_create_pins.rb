class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
        t.integer :user_id
        t.integer :source_id

        t.string :title

        t.integer :view_count, default: 0
        t.integer :save_count

        t.string :url
        t.text :description
        t.string :image_url #not sure if need this if doing embedly

        t.timestamps
    end
  end
end
