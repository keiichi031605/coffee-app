class CreateCoffees < ActiveRecord::Migration[7.0]
  def change
    create_table :coffees do |t|
      t.string :name, null: false
      t.integer :price
      t.string :process
      t.string :variety
      t.integer :roasted_for
      t.timestamps
    end
  end
end
