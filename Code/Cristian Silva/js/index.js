const reposToIgnore = ['Cristuker/You-Dont-Know-JS' , 'Cristuker/Form-example' , 'Cristuker/DiarioClasseDigital' , 
'Cristuker/api-restful-typescript', 'Cristuker/eloquente-javascript' , 'Cristuker/Cristuker' , 'Cristuker/rxjs', 'Cristuker/elixir-prac', 'Cristuker/LearningGo'];

function changeLanguage(language = 'pt') {

    switch (language) {
        case 'pt': {
            const bio = document.getElementById('bio');
            bio.innerHTML = `Fascinado na área de tecnologia desde 2014, com fome de conhecimento, codar se transformou na minha paixão. 
            Em ambito profissional, tenho boa desenvoltura em trabalho em equipe e resolução de problemas. 
            Sempre estudando para ser a melhor versão do meu lado profissional. Focado na Stack Node.js, React.js e futuramente React Native.`

            const skills = document.getElementById('skillTitle')
            skills.innerHTML = `HABILIDADES`

            const project = document.getElementById('projectTitle')
            project.innerHTML = `PROJETOS`

            break;
        }
        case 'es': {
            const bio = document.getElementById('bio');
            bio.innerHTML = `Fascinado en el área de tecnología desde 2014, ávido de conocimiento, el codar se ha convertido en mi pasión.
            En un entorno profesional, tengo buenas habilidades en trabajo en equipo y resolución de problemas.
            Siempre estudiando para ser la mejor versión de mi lado profesional. Centrado en Stack Node.js, React.js y más tarde React Native.`

            const skills = document.getElementById('skillTitle')
            skills.innerHTML = `HABILIDADES`

            const project = document.getElementById('projectTitle')
            project.innerHTML = `PROYECTOS`

            break;
        }
        case 'en': {
            const bio = document.getElementById('bio');
            bio.innerHTML = `Fascinated in the technology area since 2014, hungry for knowledge, codar has become my passion.
            In a professional environment, I have good skills in teamwork and problem solving.
            Always studying to be the best version of my professional side. Focused on Stack Node.js, React.js and later React Native.`

            const skills = document.getElementById('skillTitle')
            skills.innerHTML = `SKILLS`

            const project = document.getElementById('projectTitle')
            project.innerHTML = `PROJECTS`
            break;
        }
        default: {
            console.log('Opção invalida!');
        }
    }
}


const listComponents = data => {
    return data.map((repo) => {
        return (`
         <div  ${Math.floor(Math.random() * 10) % 2 === 0 ? 'data-aos="flip-right"' : 'data-aos="flip-left"' } class="project" alt="One of my project and they description">
             <a class="repoUrl" href="${repo.html_url}" target="blank" id="projectTitle">${repo.full_name}</a>
             <p id="description">${repo.description}</p>
             <span id="language">${repo.language ? repo.language : ' - '}</span>
         </div>
         `)
    }).join('')
}

function getRepository() {
    const header = new Headers({
        'User-agent': 'Mozilla/4.0 Custom User Agent'
    })
    fetch('https://api.github.com/users/Cristuker/repos', header)
        .then(response => response.json())
        .then(data => {
            const repos = data.filter(repo => {
                console.log(reposToIgnore)
                return  reposToIgnore.includes(repo.full_name) ? '' : repo.full_name ;

            })

            const reposDiv = document.getElementById('allProjects');
            reposDiv.innerHTML = listComponents(repos)
        })

}
