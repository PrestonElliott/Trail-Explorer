class TrailsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    
    def show
        begin @trail = Trail.find(params[:id])
            render json: @trail
        rescue
            render json: {status: "error", code: 404, message: "Trail doesn't exist!"}
        end
    end

    def index
        @trails = Trail.all 
        render json: @trails
    end
    
end
