class TripsController < ApplicationController
    
    def create 
        @trip = Trip.create(trip_params)
        render json: @trip
    end

    def index
        @trips = Trip.all 
        render json: @trips
    end

    def show
        begin @trip = Trip.find(params[:id])
            render json: @trip
        rescue
            render json: {status: "error", code: 404, message: "Trip doesn't exist!"}
        end
    end

    def destroy
        @trip = Trip.destroy(params[:id])
    end

    private
    def trip_params
        require(:trip).permit(:trail_id, :user_id, :description, :stars, :image)
    end

end
