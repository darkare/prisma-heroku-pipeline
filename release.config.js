module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/darkare/prisma-heroku-pipeline",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github"
    ]
}