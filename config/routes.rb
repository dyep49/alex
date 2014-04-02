Alex::Application.routes.draw do
  root 'main#index'

  devise_for :users
  post 'pin_share'     => 'users#share'
  get 'users/pinned'   => 'users#my_pins'
  get 'my_pins'        => 'users#my_pins'
  get 'logout'         => 'users#logout' 
  get 'get_inbox'      => 'users#get_inbox'
  get 'mark_read'      => 'users#mark_read'
  get 'find_user'      => 'users#find_user'
  get 'users/history'  => 'users#history'
  get 'users/faved'    => 'users#faved'
  get 'users/favorites'=> 'users#faved'
  get 'users/current_user' => 'users#current'
  post 'users/delete_share' => 'users#delete_share'

  resources :pins
  post 'pins/fetch'    => 'pins#fetch'
  post 'pin_fav'       => 'pins#favorite'
  post 'pin_search'    => 'pins#search'
  post 'edit_pin'      => 'pins#edit'
  get  'next_pin'      => 'pins#next'
  get  'tags/:tag_name'=> 'pins#tags'

  post '/image_upload' => 'main#image'



  resources :sources
  get 'source_pins/:id'=> 'source#source_pins'




  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
