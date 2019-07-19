User.destroy_all
Follow.destroy_all
Trail.destroy_all
# Trip.destroy_all
# Future_trip.destroy_all

andrew = User.create(name: "Andrew", email: 'andy@gmail.com', password: "123")
preston = User.create(name: "Preston", email: 'preston@gmail.com', password: "123")
romy = User.create(name: "Romy", email: 'romy@gmail.com', password: "123")
paula = User.create(name: "Paula", email: 'paula@gmail.com', password: "123")
dhara = User.create(name: "Dhara", email: 'dhara@gmail.com', password: "123")
han = User.create(name: "Han", email: 'han@gmail.com', password: "123")
jae = User.create(name: "Jae", email: 'jae@gmail.com', password: "123")
scott = User.create(name: "Scott", email: 'scott@gmail.com', password: "123")
evan = User.create(name: "Evan", email: 'evan@gmail.com', password: "123")
deka = User.create(name: "Deka", email: 'deka@gmail.com', password: "123")
rose = User.create(name: "Rose", email: 'rose@gmail.com', password: "123")
tun = User.create(name: "Tun", email: 'tun@gmail.com', password: "123")
will = User.create(name: "Will", email: 'codejones@gmail.com', password: "123")
tez = User.create(name: "Tez", email: 'tez@gmail.com', password: "123")
hanaa = User.create(name: "Hanaa", email: 'hanaa@gmail.com', password: "123")

f1 = Follow.create(followed_user: preston, user: andrew)
f2 = Follow.create(followed_user: andrew, user: preston)
f3 = Follow.create(followed_user: preston, user: romy)
f4 = Follow.create(followed_user: preston, user: paula)
f5 = Follow.create(followed_user: preston, user: dhara)
f6 = Follow.create(followed_user: preston, user: han)
f7 = Follow.create(followed_user: preston, user: jae)
f8 = Follow.create(followed_user: preston, user: scott)
f9 = Follow.create(followed_user: rose, user: romy)
f10 = Follow.create(followed_user: rose, user: paula)
f11 = Follow.create(followed_user: rose, user: dhara)
f12 = Follow.create(followed_user: rose, user: han)
f13 = Follow.create(followed_user: rose, user: jae)

trail1 = Trail.create(
    trail_id: 7021422, 
    name: "East Palisades Route", 
    summary: "A lovely hike including sweeping views of the Chattahoochee and a hidden gem - a bamboo forest!",   
    difficulty: "greenBlue",
    stars: 4.4,
    url: "https://www.hikingproject.com/trail/7021422/east-palisades-route",
    imgSmallMed: "https://cdn-files.apstatic.com/hike/7023297_smallMed_1554844842.jpg",
    imgMedium: "https://cdn-files.apstatic.com/hike/7023297_smallMed_1554844842.jpg",
    location: "Vinings, Georgia",
    length: 4.2,
    longitude: -84.442,
    latitude: 33.8784
)

trail2 = Trail.create(
    trail_id: 7045614, 
    name: "Beltline Eastside Trail: Piedmont Park to Krog Street Market", 
    summary: "A 5-mile romp through some of Atlanta's best spots for both green spaces and urban culture.",   
    difficulty: "green",
    stars: 4.5,
    url: "https://www.hikingproject.com/trail/7045614/beltline-eastside-trail-piedmont-park-to-krog-street-market",
    imgSmallMed: "https://cdn-files.apstatic.com/hike/7047531_smallMed_1555537277.jpg",
    imgMedium: "https://cdn-files.apstatic.com/hike/7047531_medium_1555537277.jpg",
    location: "Druid Hills, Georgia",
    length: 6.2,
    longitude: -84.3685,
    latitude: 33.7819
)

trail3 = Trail.create(
    trail_id: 7034642, 
    name: "Sope Creek", 
    summary: "Sope Creek has a few miles of gravel and some good, fun, singletrack in metro Atlanta.",   
    difficulty: "blue",
    stars: 4,
    url: "https://www.hikingproject.com/trail/7034642/sope-creek",
    imgSmallMed: "https://cdn-files.apstatic.com/hike/7003862_smallMed_1554235788.jpg",
    imgMedium: "https://cdn-files.apstatic.com/hike/7003862_medium_1554235788.jpg",
    location: "Vinings, Georgia",
    length: 8.8,
    longitude: -84.4455,
    latitude: 33.9042
)

trail4 = Trail.create(
    trail_id: 7014350, 
    name: "Charlies Bunion Out and Back", 
    summary: "A trail from Newfound Gap to Charlie's Bunion along the Appalachian Trail (AT).",   
    difficulty: "blue",
    stars: 4.7,
    url: "https://www.hikingproject.com/trail/7014350/charlies-bunion-out-and-back",
    imgSmallMed: "https://cdn-files.apstatic.com/hike/7011319_smallMed_1554400402.jpg",
    imgMedium: "https://cdn-files.apstatic.com/hike/7011319_medium_1554400402.jpg",
    location: "Gatlinburg, Tennessee",
    length: 8,
    longitude: -83.425,
    latitude: 35.6109
)

trail5 = Trail.create(
    trail_id: 7015700, 
    name: "Mt. Cammerer from Low Gap", 
    summary: "A wooded trail with a 360-degree view payoff on top of the mountain.",   
    difficulty: "blueBlack",
    stars: 4.7,
    url: "https://www.hikingproject.com/trail/7015700/mt-cammerer-from-low-gap",
    imgSmallMed: "https://cdn-files.apstatic.com/hike/7014429_smallMed_1554824285.jpg",
    imgMedium: "https://cdn-files.apstatic.com/hike/7014429_medium_1554824285.jpg",
    location: "Newport, Tennessee",
    length: 10.8,
    longitude: -83.2049,
    latitude: 35.752
)

# COMPLETE SEED DATA
# create_table "trips", force: :cascade do |t|
#     t.integer "user_id"
#     t.integer "trail_id"
#     t.text "description"
#     t.integer "stars"
#     t.string "image"

# create_table "future_trips", force: :cascade do |t|
#     t.integer "user_id"
#     t.integer "trail_id"
#     t.text "note"