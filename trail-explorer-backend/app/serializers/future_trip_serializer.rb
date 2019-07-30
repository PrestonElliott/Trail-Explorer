class FutureTripSerializer < ActiveModel::Serializer
  belongs_to :user

  attributes :id, :title, :note, :location, :trail_names

  def trail_names
    self.object.trail_names
  end
end
