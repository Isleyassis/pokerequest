const button = document.getElementById('button')
const closecard = document.getElementById('close-card')

function requestapi (event) {
    event.preventDefault()
    let result = document.getElementById('card-result')
    result.style.display = 'block'

    let input = document.getElementById('input-req').value.trim()
    let image = document.getElementById('image') 
    let name = document.getElementById('name') 
    let infos = document.getElementById('infos') 
    let basexp = document.getElementById('basexp') 
    let type = document.getElementById('type') 

    function fecthApi() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
            .then(response => response.json())
                .then(data => {
                    image.src = data.sprites.front_default
                    name.innerHTML = data.name
                    infos.innerHTML = `peso: ${data.weight} | altura: ${data.height}` 
                    basexp.innerHTML = `baseExperience: ${data.base_experience}`
                    let types = data.types
                    
                    types.forEach(item => {
                        let { name } = item.type
                        let res = type.innerHTML = `<strong>Tipo:</strong> ${name}`
                        console.log(name);
                        return res
                    });
                })
    }

    fecthApi()
}

function closer() {
    let result = document.getElementById('card-result')
    result.style.display = 'none'
}

button.addEventListener("click", requestapi)
closecard.addEventListener("click", closer)