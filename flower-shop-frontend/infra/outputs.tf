output "frontend_url" {
  value       = aws_s3_bucket.frontend_bucket.website_endpoint
  description = "The public URL of the deployed flower shop frontend"
}
