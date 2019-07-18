class User < ApplicationRecord
    has_secure_password

    # EXAMPLE VALIDATION
    # validates :username, uniqueness: { case_sensitive: false }

    has_many :follows
    has_many :followed_users, through: :follows
  
    has_many :followers, foreign_key: :followed_user_id, class_name: 'Follow'
    has_many :follower_users, through: :followers, source: :user
end
