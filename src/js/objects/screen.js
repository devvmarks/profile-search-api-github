const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do user"/>
                                        <div class"data">
                                            <h1>${user.name ?? 'O usuário não possui nome cadastrado ☹️'}</h1>
                                            <p>${user.bio ?? 'O usuário não possui Biografia ☹️'}</p>
                                        <div class="card">
                                            <div class="card-infos">
                                                <h3>Followers</h3>
                                                <p class="number">${user.followers ?? 'O usuário não possui Seguidores ☹️'}</p>
                                            </div>
                                            
                                            <div class="card-infos">
                                                <h3>Following</h3>
                                                <p class="number">${user.following ?? ' O usuário não segue ninguém ☹️'}</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>`


        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">${repo.name}
                                                                        <span>
                                                                            <p>🍴${repo.forks}</p>
                                                                            <p>⭐${repo.stargazers_count}</p>
                                                                            <p>👀${repo.watchers}</p>
                                                                            <p>📚${repo.language ?? 'Sem Linguagem '}</p>
                                                                        </span>
                                                                    </a>
                                                                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        document.querySelector('.profile-data').innerHTML += `
        <div class="activities">
            <h1 class="title">Atividades recentes</h1>
        </div>`

        user.activities.forEach(reposName => {
            const repositoryName = reposName.repo.name

            if (reposName.payload) {
                if (reposName.payload.commits) {
                    reposName.payload.commits.forEach(messages => {
                        const commitMessage = messages.message

                        document.querySelector('.profile-data').innerHTML += `
                        <span class="activityListClass">
                            <ul>
                                <li>
                                    <p><strong>${repositoryName}</strong>: ${commitMessage}</p>
                                </li>
                            </ul>
                        </span>`
                    })
                }
            }
        })
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3> "
    }
}
export { screen }