class Trail < ApplicationRecord
    has_many :trips
    has_many :future_trips
end
