Rails.application.routes.draw do
  resources :follows
  resources :future_trips
  resources :trips
  resources :trails
  resources :users

  post '/login', to: 'auth#create'
  get '/profile', to: 'users#show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
