const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    followers: '',
    following: '',
    userName: '',
    repositories: [],
    activities: [],

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },

    setRepositories(repositories) {
        this.repositories = repositories
        this.forks = repositories.forks
    },

    setActivities(activities) {
        this.activities = activities
    }
}

export { user }