# == Schema Information
#
# Table name: cuppings
#
#  id                          :bigint           not null, primary key
#  sample_number               :integer
#  roast_level                 :integer
#  fragrance_and_aroma_overall :integer
#  fragrance_and_aroma_dry     :integer
#  fragrance_and_aroma_break   :integer
#  flavour                     :integer
#  aftertaste                  :integer
#  acidity                     :integer
#  acidity_intensity           :integer
#  body                        :integer
#  body_level                  :integer
#  uniformity                  :integer
#  balance                     :integer
#  clean_cup                   :integer
#  sweetness                   :integer
#  overall                     :integer
#  defects                     :integer
#  total_score                 :integer
#  final_score                 :integer
#  note                        :text
#  cupped_at                   :datetime
#  created_at                  :datetime         not null
#  updated_at                  :datetime         not null
#  roasting_id                 :bigint
#
class Cupping < ApplicationRecord
end
