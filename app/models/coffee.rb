# == Schema Information
#
# Table name: coffees
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  price      :integer
#  process    :string
#  variety    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#  origin_id  :bigint
#
class Coffee < ApplicationRecord
  belongs_to :user
  belongs_to :origin, optional: true
  has_many :roastings
end
