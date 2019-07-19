class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.integer :trail_id
      t.integer :user_id
      
      t.text :description
      t.float :stars
      t.string :image

      t.timestamps
    end
  end
end
