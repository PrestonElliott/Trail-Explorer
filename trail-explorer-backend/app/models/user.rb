class User < ApplicationRecord
    
    has_secure_password

    # VALIDATIONS
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 

    #RELATIONSHIPS
    has_many :trips
    has_many :trails, through: :trips

    has_many :future_trips
    has_many :future_trails, through: :future_trips

    has_many :follows
    has_many :followed_users, through: :follows
  
    has_many :followers, foreign_key: :followed_user_id, class_name: 'Follow'
    has_many :follower_users, through: :followers, source: :user

end
