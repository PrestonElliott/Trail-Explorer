class UserSerializer < ActiveModel::Serializer
  has_many :followed_users
  has_many :trips
  has_many :future_trips

  attributes :id, :email, :name

  # def trips
  #   self.object.trips
  # end

  # def futureTrips
  #   self.object.future_trips
  # end

end
