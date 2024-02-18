class CreateOrigins < ActiveRecord::Migration[7.0]
  def change
    create_table :origins do |t|
      t.string :name, null: false
      t.integer :country, null: false
      t.timestamps
    end
    add_reference :coffees, :origin, foreign_key: true
  end
end
