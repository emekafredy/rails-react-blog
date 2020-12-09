class Api::V1::PostsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]
  
  def index
    sql = <<~SQL.squish
      SELECT posts.*, users.first_name, users.last_name, users.username, categories.name AS category
      FROM posts
      LEFT OUTER JOIN users AS users ON users.id = posts.user_id
      LEFT OUTER JOIN categories AS categories ON categories.id = posts.category_id
      SQL

    @posts = ActiveRecord::Base.connection.execute(sql)

    render json: { message: 'Posts retrieved', posts: @posts }
  end

  def show
    @post = set_post

    render json: { message: 'Post retrieved', post: @post, user: @post.user.username }
  end

  def create
    @post = current_user.posts.build(post_params)

    if @post.save
      render json: { message: 'Post created successfully', post: @post, user: @post.user.username }
    else
      render json: { error: @post.errors.full_messages }
    end
  end

  def update
    @post = set_user_post

    if @post.update(post_params)
      render json: { message: 'Successful update', post: @post, user: @post.user.username }
    else
      render json: { error: 'Post update failed' }
    end
  end

  def destroy
    @post = set_user_post

    if @post.destroy
      render json: { message: 'Post successfully deleted' }
    else
      render json: { error: 'Post delete failed' }
    end
  end

  private

    def post_params
      params.permit(:title, :body)
    end

    def set_post
      Post.find_by(id: params[:id])
    end

    def set_user_post
      Post.where(user_id: current_user.id).find(params[:id])
    end
end
