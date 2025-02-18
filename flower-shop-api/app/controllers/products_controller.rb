class ProductsController < ApplicationController
  def show
    flowers = [
      { name: "Rose", imageUrl: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 10.99 },
      { name: "Tulip", imageUrl: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 8.99 },
      { name: "Sunflower", imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 12.50 },
      { name: "Lily", imageUrl: "https://images.unsplash.com/photo-1561897519-6e4fbd1fbc41?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 15.00 },
      { name: "Daisy", imageUrl: "https://plus.unsplash.com/premium_photo-1664008141848-5366dafbbe2b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 7.99 },
      { name: "Orchid", imageUrl: "https://plus.unsplash.com/premium_photo-1676253694654-79c2214ccbc7?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 18.75 },
      { name: "Lotus", imageUrl: "https://plus.unsplash.com/premium_photo-1695750536632-7e3055fc48d5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 5.99 },
      { name: "Dahlia", imageUrl: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 8.75 },
    ]

    render json: flowers
  end
end
