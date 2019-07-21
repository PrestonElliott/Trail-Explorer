class Trip < ApplicationRecord
    # VALIDATIONS
    validates :trail, presence: true
    validates :user, presence: true

    #RELATIONSHIPS
    belongs_to :trail
    belongs_to :user

end
