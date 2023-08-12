Rails.application.routes.draw do
  namespace :api  do
    namespace :v1 do
      resources :producers
      resources :coffees
      resources :roastings
      resources :cuppings
    end
  end
end
