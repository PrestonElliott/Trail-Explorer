class TrailSerializer < ActiveModel::Serializer
  attributes :id, :trail, :name, :summary, :difficulty, :stars, :url, :imgSmallMed, :imgMedium, :location, :length, :longitude, :latitude
end
