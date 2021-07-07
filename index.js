//fetch data and convert to JSON

fetch('http://api.tvmaze.com/shows/375/episodes')
.then(res => res.json())
.then(json => json.forEach(cardRender))

//Card Render Function
function cardRender(episodeData){
    //creating elements
    let divContainer = document.createElement('div')
    let divContent = document.createElement('div')
    //let divImage = document.createElement('div')
    let h3Title = document.createElement('h3')
    let pSeason = document.createElement('p')
    let img = document.createElement('img')

    //adding identification to elements
    divContainer.className= 'episodeCard'
    divContent.className = 'episodeContent'

    //adding content to elements
    img.src = episodeData.image.original
    //console.log(episodeData.image.original)
    h3Title.textContent = episodeData.name
    pSeason.textContent = "Season: " + episodeData.season + " | Episode: " + episodeData.number


    //appending elements to the DOM
    divContent.append(img, h3Title, pSeason)
    divContainer.append(divContent)
    document.querySelector("#allCardContainer").append(divContainer)

    divContent.addEventListener('click', () => showSummary(episodeData.summary))
}

//showSummary callback function for event listner
function showSummary(summary){
    console.log(summary);
}

