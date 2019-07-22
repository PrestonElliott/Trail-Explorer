class ApplicationController < ActionController::API
    # Add back once login functionality works
    before_action :authorized

    def authorized
        if not logged_in?
            render json: { message: 'Please log in' }, status: :unauthorized
        end
    end

    def logged_in?
        !!current_user
    end

    def current_user
        if decoded_token
            user_id = decoded_token[0]['user_id']
            @user = User.find_by(id: user_id)
        end
    end

    def decoded_token
        if auth_header
        token = auth_header.split(' ')[1]
            begin
                JWT.decode(token, '+tree_192$house', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def auth_header
        request.headers['Authorization']
    end

    # ...
 
    def encode_token(payload)
        # should store secret in env variable
        JWT.encode(payload, '+tree_+192$house')
    end
end
