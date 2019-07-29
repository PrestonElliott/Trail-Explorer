class TripSerializer < ActiveModel::Serializer
  # has_many :destinations
  has_many :trails, through: :destinations
  belongs_to :user

  attributes :id, :title, :location, :description, :stars, :image
end
