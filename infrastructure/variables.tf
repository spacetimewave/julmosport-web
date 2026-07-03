variable "aws_account_id" {}

variable "aws_region" {
  default = "eu-west-1"
}

variable "otf_state_s3_bucket_name" {}

variable "otf_state_s3_file_name" {}

variable "github_repository" {
  description = "GitHub repository allowed to assume the OIDC pipeline role."
  default     = "spacetimewave/*"
}

variable "github_repository_branch" {}