class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def encode_token(payload)
    JWT.encode(payload, 'jwt_secret')
  end

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]

      begin
        JWT.decode(token, 'jwt_secret', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        []
      end
    end
  end

  def current_user
    decoded = decoded_token

    if !decoded.empty?
      user_id = decoded[0]['user_id']
      @user   = User.find_by(id: user_id)
    else
      nil
    end
  end

  def logged_in?
    !!current_user
  end

  def require_login
    render json: { message: 'Please Login to gain access' }, status: :unauthorized unless logged_in?
  end
end
