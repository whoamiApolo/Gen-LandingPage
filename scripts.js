let sobre = document.querySelector('#sobre')

async function getApiGithub() {
    try {
        const dadosPerfil = await fetch('https://api.github.com/users/whoamiApolo')
        const perfil = await dadosPerfil.json()

        let conteudo = `
        <img src="${perfil.avatar_url}" alt="Foto do Perfil do Github - ${perfil.name}">
        <article class="section_content">
            <h1>Who am I? ${perfil.name}</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam odit voluptates incidunt inventore rem error harum blanditiis accusamus vitae, minus fugit consequatur? Dolorum maiores magni deleniti modi sit laudantium totam!
                        </p>
        
            <div class="section_github flex">
                <a class="btn" target="_blank" href="${perfil.html_url}">Github</a>
                <p>${perfil.followers} Seguidores</p>
                <p>${perfil.public_repos} Repositórios</p>
            </div>
        </article>
        `

        sobre.innerHTML += conteudo

        console.log(conteudo)

    } catch (error) {
        console.log("Error")
    }
}

function changeTheme() {
    document.body.classList.toggle('dark-theme')
}

getApiGithub()