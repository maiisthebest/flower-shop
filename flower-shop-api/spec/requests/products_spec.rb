require "rails_helper"

RSpec.describe "Products", type: :request do
  describe "GET /products/show" do
    let(:mock_flowers) do
      [
        { "name" => "Mock Rose", "imageUrl" => "https://abc.com/mock-rose.jpg", "price" => 9.99 },
        { "name" => "Mock Tulip", "imageUrl" => "https://abc.com/mock-tulip.jpg", "price" => 7.99 },
      ]
    end

    before do
      allow(File).to receive(:read).with(Rails.root.join("config", "flowers.json")).and_return(mock_flowers.to_json)
    end

    it "returns a list of products" do
      get "/products/show"

      expect(response).to have_http_status(:success)

      products_response = JSON.parse(response.body)
      expect(products_response.size).to eq(mock_flowers.size)
      expect(products_response.first).to eq(mock_flowers.first)
      expect(products_response.last).to eq(mock_flowers.last)
    end
  end
end
