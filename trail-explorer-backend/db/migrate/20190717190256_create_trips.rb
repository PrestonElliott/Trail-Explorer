class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.integer :user_id
      t.integer :trail_id
      t.text :description
      t.integer :stars
      t.string :image

      t.timestamps
    end
  end
end
