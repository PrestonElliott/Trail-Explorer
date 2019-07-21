class Trail < ApplicationRecord
    # VALIDATIONS

    #RELATIONSHIPS
    has_many :trips
    has_many :future_trips
    
end
