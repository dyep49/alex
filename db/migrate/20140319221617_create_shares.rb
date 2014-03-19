class CreateShares < ActiveRecord::Migration
  def change
    create_table :shares do |t|
        t.integer :from_user_id
        t.integer :to_user_id
        t.timestamps
    end
  end
end
