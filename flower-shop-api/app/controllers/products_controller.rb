class ProductsController < ApplicationController
  def show
    product = {
      name: "Pink Lily",
      price: 10,
      imageUrl: "https://images.unsplash.com/photo-1561897519-6e4fbd1fbc41?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }

    render json: product
  end
end
