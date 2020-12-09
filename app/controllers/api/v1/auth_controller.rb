class Api::V1::AuthController < ApplicationController
  def login
    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      payload = { user_id: user.id, username: user.username }
      token = encode_token(payload)
      render json: { token: token, message: "Welcome back, #{user.username}" }
    else
      render json: { errors: "Login failed! Username or password incorrect" }, status: :not_acceptable
    end
  end

  def auto_login
    if current_user
      render json: current_user
    else
      render json: { errors: "User is not logged in" }
    end
  end
end