class ApplicationController < ActionController::API
    # Add back once login functionality works
    before_action :authorized

    def authorized
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end

    def logged_in?
        !!current_user
    end

    def current_user
		begin
			user_id = JWT.decode(self.request.headers['Authorization'], '+tree_+192$house')[0]['user_id']
			@user = User.find(user_id)
			rescue
        end
		@user
    end
 
    def encode_token(payload)
        # should store secret in env variable
        JWT.encode(payload, '+tree_+192$house')
    end
end
