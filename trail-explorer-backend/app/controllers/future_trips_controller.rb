class FutureTripsController < ApplicationController
    
    skip_before_action :authorized, only: [:index]

    def create 
        @future_trip = FutureTrip.new(future_trip_params)
        @future_trip.user = @user
        @future_trip.save

        params[:future_trip][:trail_names].each { |trail_name|
            Destination.create(trek: @future_trip, trail_name: trail_name )
        }

        render json: { future_trip: FutureTripSerializer.new(@future_trip) }, status: :ok
    end

    def index
        @future_trips = FutureTrip.all 
        render json: @future_trips
    end

    def show
        begin @future_trip = FutureTrip.find(params[:id])
            render json: @future_trip
        rescue
            render json: {status: "error", code: 404, message: "This Future Trip doesn't exist!"}
        end
    end

    def destroy
        @trip = FutureTrip.destroy(params[:id])
    end

    private
    def future_trip_params
        params.require(:future_trip).permit(:title, :note, :location)
    end
    
end
