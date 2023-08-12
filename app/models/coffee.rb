# == Schema Information
#
# Table name: coffees
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  price       :integer
#  process     :string
#  variety     :string
#  roasted_for :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Coffee < ApplicationRecord
end
