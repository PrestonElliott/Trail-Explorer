class Trail < ApplicationRecord
    #RELATIONSHIPS    
    has_many :destinations
    has_many :trips, through: :destinations
    has_many :future_trips, through: :destinations  
end
