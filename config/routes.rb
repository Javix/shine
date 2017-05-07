Rails.application.routes.draw do
  get 'fake_payment_processor/show'

  devise_for :users
  root to: "dashboard#index"

  # These supercede other /customers routes, so must
  # come before resource :customers
  get "customers/ng", to: "customers#ng"
  get "customers/ng/*angular_route", to: "customers#ng"

  resources :customers, only: [:index, :show]
  get "angular_test" => "angular_test#index"
  get "credit_card_info/:id", to: "fake_payment_processor#show"
end
