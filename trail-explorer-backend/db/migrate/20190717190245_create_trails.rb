class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.integer :trail_id
      t.string :name
      t.text :summary
      t.string :difficulty
      t.integer :stars
      t.string :url
      t.string :imgSmallMed
      t.string :imgMedium
      t.string :location
      t.float :length
      t.float :longitude
      t.float :latitude

      t.timestamps
    end
  end
end
