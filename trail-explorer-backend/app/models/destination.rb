class Destination < ApplicationRecord
    #RELATIONSHIPS
    belongs_to :trail
    belongs_to :trek, polymorphic: true
end
