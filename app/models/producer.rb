# == Schema Information
#
# Table name: producers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  country    :string           not null
#  location   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
class Producer < ApplicationRecord
  has_many :coffees
end
