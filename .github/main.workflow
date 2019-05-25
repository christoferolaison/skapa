workflow "Deploy on Now" {
  on = "push"
  resolves = ["release"]
}

# Deploy, and write deployment to file
action "deploy" {
  uses = "./release"
  args = "-la"
}
