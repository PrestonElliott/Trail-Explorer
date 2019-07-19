class TripSerializer < ActiveModel::Serializer
  attributes :id, :user, :trail, :description, :stars, :image
end
