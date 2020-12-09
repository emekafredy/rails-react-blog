Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resource :users, only: [:create, :show]
      get 'auth/login'

      resources :posts
    end
  end
  root 'homepage#index'
end
