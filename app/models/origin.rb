# == Schema Information
#
# Table name: origins
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  country    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Origin < ApplicationRecord
  has_many :coffees

  enum country: {
    brazil: 0,
    vietnam: 1,
    colombia: 2,
    indonesia: 3,
    ethiopia: 4,
    honduras: 5,
    india: 6,
    uganda: 7,
    mexico: 8,
    peru: 9,
    guatemala: 10,
    nicaragua: 11,
    costa_rica: 12,
    kenya: 13,
    yemen: 14,
    tanzania: 15,
    panama: 16,
    el_salvador: 17,
    rwanda: 18,
    burundi: 19
  }
end
