const searchButton = document.querySelector('#searchButton');
const removeButton = document.querySelector('#removeButton');
const gifSection = document.querySelector('#gifSection');

searchButton.addEventListener('click', async function (e) {
    e.preventDefault();
    const input = document.querySelector('#gifSearch');
    const searchTerm = input.value;
    const gifURL = await searchGifs(searchTerm);
    input.value = '';
    const img = document.createElement('img');
    img.src = gifURL;
    gifSection.append(img);
})

removeButton.addEventListener('click', function (e) {
    e.preventDefault();
    while (gifSection.firstChild) {
        gifSection.removeChild(gifSection.firstChild);
    }
})

async function searchGifs(search) {
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q: search,
            api_key: 'LuzmrXfvWZy3PuqBQIXP2965MdrfLmul'
        }
    });
    const numResults = res.data.data.length;
    const randomValue = Math.floor(Math.random() * numResults);
    return res.data.data[randomValue].images.original.url;
}