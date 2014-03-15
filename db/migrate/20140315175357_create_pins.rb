class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
        t.integer :user_id
        t.integer :source_id

        t.integer :view_count
        t.integer :save_count

        t.string :url
        t.string :description
        t.string :image_url #not sure if need this if doing embedly

        t.timestamps
    end
  end
end
