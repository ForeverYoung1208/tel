Rails.application.routes.draw do
  get 'react_app/index'

	resources :cards

	root to: 'react_app#index'

	
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
