class Destination < ApplicationRecord
    # belongs_to :trail, foreign_key: true
    # belongs_to :trek, polymorphic: true, index: true

    belongs_to :trail
    belongs_to :trek, polymorphic: true
end
