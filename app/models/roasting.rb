# == Schema Information
#
# Table name: roastings
#
#  id         :bigint           not null, primary key
#  coffee_id  :bigint
#  roasted_at :datetime
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Roasting < ApplicationRecord
  # belongs_to :coffee
  # has_many :cuppings
end
