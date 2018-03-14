Rails.application.routes.draw do

  devise_for :users

  # resources :cards do
  # 	collection do
	 #  	post 'import'
  # 	end
  # end

	scope :admin do
	  resources :cards do
	  	collection do
		  	post 'import'
	  	end
	  end
		resources :users	  
	end  

	scope :api do
	  get 'cards/index', to: 'cards#api_index', constraints: lambda { |req| req.format == :json }
	end


  get 'react_app/index'
	root to: 'react_app#index'

	
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
