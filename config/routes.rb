Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '/(:locale)', locale: /en|es/ do
    root 'static_pages#document'
    resources :users, only: [] do
      collection do
        get 'document'
      end
    end
  end
end
