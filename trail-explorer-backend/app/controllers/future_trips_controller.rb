class FutureTripsController < ApplicationController

    def create 
        @future_trip = FutureTrip.create(future_trip_params)
        render json: @future_trip
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
        require(:future_trip).permit(:trail_id, :user_id, :note)
    end
    
end
