output "api_url" {
  value = aws_elastic_beanstalk_environment.api_env.endpoint_url
  description = "The public URL of the flower shop API"
}
