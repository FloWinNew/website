Rails.application.routes.draw do

  get "/index", to: "page#index", as: "index"
  get 'page/form' => 'page#form'
  root 'page#index'
end
