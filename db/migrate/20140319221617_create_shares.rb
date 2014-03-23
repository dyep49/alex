class CreateShares < ActiveRecord::Migration
  def change
    create_table :shares do |t|
        t.integer :from_user_id
        t.integer :to_user_id
        t.integer :pin_id
        t.boolean :seen, default: false
      	t.string :from_user_name
        t.timestamps
    end
  end
end
