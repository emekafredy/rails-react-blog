Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post '/auth/register', to: 'users#create'
      post '/auth/login'
      get  '/users/profile',  to: 'users#show'

      post   '/posts',             to: 'posts#create'
      get    '/posts',             to: 'posts#index'
      get    '/posts/:id',         to: 'posts#show'
      put    '/posts/:id/update',  to: 'posts#update'
      delete '/posts/:id/destroy', to: 'posts#destroy'
      get    '/categories',        to: 'categories#index'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
