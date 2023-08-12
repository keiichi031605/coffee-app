class CreateRoastings < ActiveRecord::Migration[7.0]
  def change
    create_table :roastings do |t|
      t.references :coffee, foreign_key: true
      t.datetime :roasted_at
      t.timestamps
    end
    add_reference :cuppings, :roasting, foreign_key: true
  end
end
