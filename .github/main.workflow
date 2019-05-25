workflow "Setup" {
  on = "push"
  resolves = ["yarn"]
}

action "yarn" {
  uses = "./yarn"
}
