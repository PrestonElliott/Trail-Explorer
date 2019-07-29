class CreateFutureTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :future_trips do |t|
      t.integer :user_id

      t.text :title
      t.text :note
      t.text :location

      t.timestamps
    end
  end
end
