class TripSerializer < ActiveModel::Serializer
  has_many :destinations
  has_many :trails, through: :destinations
  attributes :id, :user, :description, :stars, :image
end
