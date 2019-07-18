# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Follow.destroy_all

asa = User.create(name: "Andrew", email: 'Andrew', password: "123")
preston = User.create(name: "Preston", email: 'Preston', password: "123")

Follow.create(followed_user: preston, user: asa)
Follow.create(followed_user: asa, user: preston)
