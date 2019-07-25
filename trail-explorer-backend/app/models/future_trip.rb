class FutureTrip < ApplicationRecord
    # VALIDATIONS
    validates :user, presence: true

    #RELATIONSHIPS
    belongs_to :user
    has_many :destinations, as: :trek
    has_many :trails, through: :destinations   
end
