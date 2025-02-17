terraform {
     required_providers {
      aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    bucket         = "flower-shop-api-terraform-state"
    key            = "flower-shop-api/terraform.tfstate"
    region         = "ap-southeast-2"
    encrypt        = true
  }
}

resource "aws_elastic_beanstalk_application" "api_app" {
  name = "flower-shop-api"
}

resource "aws_elastic_beanstalk_environment" "api_env" {
  name                = "flower-shop-api-env"
  application         = aws_elastic_beanstalk_application.api_app.name
  solution_stack_name = "64bit Amazon Linux 2023 v4.3.1 running Ruby 3.3"

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     = aws_iam_instance_profile.elasticbeanstalk_ec2_profile.name
  }
  
  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "InstanceType"
    value     = "t3.small"
  }

  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name      = "EnvironmentType"
    value     = "SingleInstance"
  }

  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "RAILS_ENV"
    value     = "production"
  }

  setting {
    namespace = "aws:elasticbeanstalk:application"
    name      = "Application Healthcheck URL"
    value     = "/up"
  }
}

resource "aws_iam_role" "elasticbeanstalk_ec2_role" {
  name = "elasticbeanstalk-ec2-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_instance_profile" "elasticbeanstalk_ec2_profile" {
  name = "elasticbeanstalk-ec2-profile"
  role = aws_iam_role.elasticbeanstalk_ec2_role.name
}

resource "aws_iam_policy_attachment" "eb_web_tier_attach" {
  name       = "eb-web-tier-attachment"
  policy_arn = "arn:aws:iam::aws:policy/AWSElasticBeanstalkWebTier"
  roles      = [aws_iam_role.elasticbeanstalk_ec2_role.name]
}

resource "aws_iam_policy_attachment" "eb_worker_tier_attach" {
  name       = "eb-worker-tier-attachment"
  policy_arn = "arn:aws:iam::aws:policy/AWSElasticBeanstalkWorkerTier"
  roles      = [aws_iam_role.elasticbeanstalk_ec2_role.name]
}

resource "aws_iam_policy_attachment" "ecr_readonly_attach" {
  name       = "ecr-readonly-attachment"
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
  roles      = [aws_iam_role.elasticbeanstalk_ec2_role.name]
}


