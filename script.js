const apiUrl = "https://rickandmortyapi.com/api/character"

function creatList(personagens){
    const listaHTML = personagens.map((personagem)=>{
        return `
        <div class="personagens">
            <img src="${personagem.image}" alt="${personagem.name}">
            <div class="personagens_conteudo">
                <h3>${personagem.name}</h3>
                <span id="status">status</span>
        </div>
    </div>
        `

    })

    document.getElementById("lista-personagens").innerHTML = listaHTML.join();
}

async function getPersonagens(search){
    const filter = search && search ? "?name="+search : '';
    const reponse = await fetch(apiUrl+filter)
    const { results } = await reponse.json()
    creatList(results)
}   

document.getElementById('search').addEventListener('keyup', (e)=> {
    getPersonagens(e.target.value)
})



window.addEventListener('load' , getPersonagens())