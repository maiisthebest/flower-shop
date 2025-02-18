class ProductsController < ApplicationController
  def show
    file_path = Rails.root.join("config", "flowers.json")
    flowers = JSON.parse(File.read(file_path))

    render json: flowers
  end
end
