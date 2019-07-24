class Trail < ApplicationRecord
    # VALIDATIONS

    #RELATIONSHIPS
    # has_many :trips
    # has_many :future_trips
    
    has_many :destinations
    has_many :trips, through: :destinations
    has_many :future_trips, through: :destinations
    
end
