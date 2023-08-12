# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_12_015431) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "coffees", force: :cascade do |t|
    t.string "name", null: false
    t.integer "price"
    t.string "process"
    t.string "variety"
    t.integer "roasted_for"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "producer_id"
    t.index ["producer_id"], name: "index_coffees_on_producer_id"
  end

  create_table "cuppings", force: :cascade do |t|
    t.integer "sample_number"
    t.integer "roast_level"
    t.integer "fragrance_and_aroma_overall"
    t.integer "fragrance_and_aroma_dry"
    t.integer "fragrance_and_aroma_break"
    t.integer "flavour"
    t.integer "aftertaste"
    t.integer "acidity"
    t.integer "acidity_intensity"
    t.integer "body"
    t.integer "body_level"
    t.integer "uniformity"
    t.integer "balance"
    t.integer "clean_cup"
    t.integer "sweetness"
    t.integer "overall"
    t.integer "defects"
    t.integer "total_score"
    t.integer "final_score"
    t.text "note"
    t.datetime "cupped_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "roasting_id"
    t.index ["roasting_id"], name: "index_cuppings_on_roasting_id"
  end

  create_table "producers", force: :cascade do |t|
    t.string "name", null: false
    t.string "country", null: false
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roastings", force: :cascade do |t|
    t.bigint "coffee_id"
    t.datetime "roasted_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coffee_id"], name: "index_roastings_on_coffee_id"
  end

  add_foreign_key "coffees", "producers"
  add_foreign_key "cuppings", "roastings"
  add_foreign_key "roastings", "coffees"
end
