workflow "Setup" {
  on = "push"
  resolves = ["yarn"]
}

action "yarn" {
  uses = "./.github/yarn"
  args = "build && skapa publish --next"
  secrets = [
    "GITHUB_TOKEN",
    "NPM_AUTH_TOKEN",
  ]
  env = {
    GH_EMAIL = "bot@bot.com"
    GH_USER = "bot"
  }
}
