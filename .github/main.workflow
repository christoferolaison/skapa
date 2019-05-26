workflow "Setup" {
  on = "push"
  resolves = ["yarn"]
}

action "yarn" {
  uses = "./.github/yarn"
  args = "publish --next"
  secrets = ["GITHUB_TOKEN"]
}
