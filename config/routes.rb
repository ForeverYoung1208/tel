Rails.application.routes.draw do

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
	end  
  

  get 'react_app/index'
	root to: 'react_app#index'

	
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
