# Flower Shop API

This is the backend API for the Flower Shop web application. It is built using **Ruby on Rails** and provides an endpoint to retrieve a list of flowers.

## Features

- Provides a RESTful API to fetch flower data
- Reads flower data from a JSON file (a database will be created in the next iteration)
- Deployed using AWS Elastic Beanstalk

## Prerequisites

- [Ruby](https://www.ruby-lang.org/)
- [Rails](https://rubyonrails.org/)
- [AWS CLI](https://aws.amazon.com/cli/)
- [Terraform](https://developer.hashicorp.com/terraform/cli)

## Install dependencies

```
bundle install
```

## Running

Start the Flower Shop API server:

```
rails s
```

The app will be available at http://localhost:3000.

## Deploying

The API is deployed using AWS Elastic Beanstalk.

Initialise Elastic Beanstalk (you don't need to do this if you deploy using GitHub Actions). Remember to configure your `awscli` first:

```
eb init -p "Ruby" flower-shop-api --region ap-southeast-2
```

Deploy the application to AWS Elastic Beanstalk.

```
eb deploy flower-shop-api-env

```

## Running tests

To run tests:

```
bundle exec rspec

```
