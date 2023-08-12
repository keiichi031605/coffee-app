class CreateCuppings < ActiveRecord::Migration[7.0]
  def change
    create_table :cuppings do |t|
      t.integer :sample_number
      t.integer :roast_level
      t.integer :fragrance_and_aroma_overall
      t.integer :fragrance_and_aroma_dry
      t.integer :fragrance_and_aroma_break
      t.integer :flavour
      t.integer :aftertaste
      t.integer :acidity
      t.integer :acidity_intensity
      t.integer :body
      t.integer :body_level
      t.integer :uniformity
      t.integer :balance
      t.integer :clean_cup
      t.integer :sweetness
      t.integer :overall
      t.integer :defects
      t.integer :total_score
      t.integer :final_score
      t.text :note
      t.datetime :cupped_at
      t.timestamps
    end
  end
end
