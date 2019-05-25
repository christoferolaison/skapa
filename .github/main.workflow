workflow "Deploy on Now" {
  on = "push"
  resolves = ["release"]
}

# Deploy, and write deployment to file
action "release" {
  uses = "./release"
  args = "-la"
}
