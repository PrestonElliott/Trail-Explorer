class UserSerializer < ActiveModel::Serializer
  has_many :followed_users

  attributes :id, :email, :name, :trips, :futureTrips

  def trips
    self.object.trips
  end

  def futureTrips
    self.object.future_trips
  end

end
