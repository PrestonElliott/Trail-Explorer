class FutureTrip < ApplicationRecord
    belongs_to :trail
    belongs_to :user
end
