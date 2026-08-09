# --------------------------------------------- #
# --------------- AWS + OpenTofu -------------- #
# --------------------------------------------- #

variable "aws_account_id" {}

variable "aws_region" {
  default = "eu-west-1"
}

variable "otf_state_s3_bucket_name" {}

variable "otf_state_s3_file_name" {}

variable "github_repository" {
}

variable "github_repository_with_id" {
  description = "GitHub repository immutable subject claim prefix for OIDC. Check repository settings > Actions > OIDC: \"org@org_id/repo@repo_id\"."
}

variable "github_repository_branch" {}

# --------------------------------------------- #
# ------------------ Project ------------------ #
# --------------------------------------------- #
variable "frontend_s3_bucket_name" {}