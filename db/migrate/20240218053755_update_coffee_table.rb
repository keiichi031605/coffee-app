class UpdateCoffeeTable < ActiveRecord::Migration[7.0]
  def change
    # remove unnecessary columns
    remove_column :coffees, :roasted_for
    remove_column :producers, :country
    remove_column :producers, :location
  end
end
