class UserSerializer < ActiveModel::Serializer
  has_many :followed_users
  # has_many :followed_users_trips, through: :followed_users, class_name: 'Trip'
  # has_many :followed_users_future_trips, through: :followed_users, class_name: 'FutureTrip'
  # has_many :trips, through: :followed_users
  # has_many :future_trips, through: :followed_users

  attributes :id, :email, :name, :trips, :futureTrips

  def trips
    self.object.trips
  end

  def futureTrips
    self.object.future_trips
  end

end
