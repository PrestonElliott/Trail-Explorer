class FollowedUserSerializer < ActiveModel::Serializer
    has_many :trips
    has_many :future_trips
  
    attributes :id, :email, :name
end
