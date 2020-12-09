class Api::V1::UsersController < ApplicationController
  def create
    user = User.create(user_params)

    if user.valid?
      payload = { user_id: user.id, username: user.username }
      token = encode_token(payload)
      render json: { token: token }
    else
      render json: { errors: user.errors.full_messages }, status: :not_acceptable
    end
  end

  def show
    render json: { user: current_user }
  end

  private

    def user_params
      params.permit(:first_name, :last_name, :username, :password)
    end
end
