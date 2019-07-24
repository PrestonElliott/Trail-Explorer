class CreateDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :destinations do |t|
      t.references :trail, foreign_key: true
      t.references :trek, polymorphic: true, index: true

      t.timestamps
    end
  end
end
