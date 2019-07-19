class FutureTripsController < ApplicationController
    def index
        @future_trips = FutureTrip.all 
        render json: @future_trips
    end
end
