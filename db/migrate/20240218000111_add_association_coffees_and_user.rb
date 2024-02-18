class AddAssociationCoffeesAndUser < ActiveRecord::Migration[7.0]
  def change
    add_reference :coffees, :user, foreign_key: true
    remove_reference :coffees, :producer, foreign_key: true
  end
end
