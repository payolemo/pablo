Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '/(:locale)', locale: /en|es/ do
    root 'main#index'
    resources :static_pages, only: [] do
      collection do
        get 'document'
      end
    end
  end
end
