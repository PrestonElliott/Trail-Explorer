class CreateFutureTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :future_trips do |t|
      t.integer :user_id
      t.integer :trail_id
      t.text :note

      t.timestamps
    end
  end
end
