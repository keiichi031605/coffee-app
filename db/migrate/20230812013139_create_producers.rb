class CreateProducers < ActiveRecord::Migration[7.0]
  def change
    create_table :producers do |t|
      t.string :name, null: false
      t.string :country, null: false
      t.string :location
      t.timestamps
    end
    add_reference :coffees, :producer, foreign_key: true
  end
end
