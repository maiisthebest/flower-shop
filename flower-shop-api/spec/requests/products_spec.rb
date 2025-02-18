require "rails_helper"

RSpec.describe "Products", type: :request do
  describe "GET /products/show" do
    it "returns a list of product details" do
      get "/products/show"

      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body).first).to include("name", "price", "imageUrl")
    end
  end
end
