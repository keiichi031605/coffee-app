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
end
