class CreateHistories < ActiveRecord::Migration
  def change
    create_table :histories do |t|
        t.integer :user_id
        t.integer :pin_id
        t.timestamps
    end
  end
end
