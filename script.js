

function mudaFrase(){
    const campo_frase = document.getElementById("frase")
    const url = "https://api.kanye.rest/"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Dados da API:', data)
            campo_frase.innerHTML = data.quote
        })
        .catch(error => console.error('Erro ao buscar dados do API:', error))
    
}

