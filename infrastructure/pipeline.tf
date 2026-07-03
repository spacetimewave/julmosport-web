# OIDC provider for GitHub Actions
resource "aws_iam_openid_connect_provider" "github" {
  url = local.github_oidc_url
  client_id_list = [local.github_oidc_client_id]
  thumbprint_list = [local.github_oidc_thumbprint] 
}

# IAM role assumed by GitHub Action workflow.
resource "aws_iam_role" "pipeline_oidc" {
  name = "pipeline-oidc-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Federated = aws_iam_openid_connect_provider.github.arn
        }
        Action = "sts:AssumeRoleWithWebIdentity"
        Condition = {
          StringLike = {
            "token.actions.githubusercontent.com:sub" = [
              "repo:${var.github_repository}:ref:refs/heads/${var.github_repository_branch}",
              "repo:${var.github_repository}:environment:production"
            ]
          }
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "pipeline_admin" {
  role       = aws_iam_role.pipeline_oidc.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}

# # OIDC provider for GitHub Actions
# resource "aws_iam_openid_connect_provider" "github" {
#   url = "https://token.actions.githubusercontent.com"
#   client_id_list = ["sts.amazonaws.com"]
#   thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"] # GitHub's thumbprint
# }

# # IAM role for CI/CD pipelines
# resource "aws_iam_role" "pipeline_oidc" {
#   name = "pipeline-oidc-role"

#   assume_role_policy = jsonencode({
#     Version = "2012-10-17"
#     Statement = [
#         {
#         Effect = "Allow"
#         Principal = {
#             Federated = aws_iam_openid_connect_provider.github.arn
#         }
#         Action = "sts:AssumeRoleWithWebIdentity"
#         Condition = {
#             StringLike = {
#             "token.actions.githubusercontent.com:sub" = [
#                 "repo:cybertechcorp/montajes-lucho:ref:refs/heads/*",
#                 "repo:cybertechcorp/montajes-lucho:environment:production"
#             ]
#             }
#         }
#         }
#     ]
#   })
# }

# # Infrastructure Pipeline: Attach AdministratorAccess for full control over resources 
# resource "aws_iam_role_policy_attachment" "pipeline_admin" {
#   role       = aws_iam_role.pipeline_oidc.name
#   policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
# }

# # Frontend Pipeline: Attach policy for S3 and CloudFront
# resource "aws_iam_role_policy" "pipeline_oidc_policy" {
#   name = "pipeline-oidc-policy"
#   role = aws_iam_role.pipeline_oidc.id

#   policy = jsonencode({
#     Version = "2012-10-17"
#     Statement = [
#       {
#         Effect = "Allow"
#         Action = [
#           "s3:PutObject",
#           "s3:PutObjectAcl",
#           "s3:GetObject",
#           "s3:ListBucket",
#           "s3:DeleteObject"
#         ]
#         Resource = [
#           aws_s3_bucket.frontend.arn,
#           "${aws_s3_bucket.frontend.arn}/*"
#         ]
#       },
#       {
#         Effect = "Allow"
#         Action = [
#           "cloudfront:CreateInvalidation"
#         ]
#         Resource = aws_cloudfront_distribution.frontend.arn
#       }
#     ]
#   })
# }