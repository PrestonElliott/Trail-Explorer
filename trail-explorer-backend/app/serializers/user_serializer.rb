class UserSerializer < ActiveModel::Serializer
  # has_many :followed_users, each_serializer: FollowedUserSerializer
  has_many :trips
  has_many :future_trips

  attributes :id, :email, :name, :followed_users

  def followed_users
    self.object.followed_users.map{|f| FollowedUserSerializer.new(f) }
  end

end
