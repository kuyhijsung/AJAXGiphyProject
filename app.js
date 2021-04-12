const searchButton = document.querySelector('#searchButton');
const removeButton = document.querySelector('#removeButton');
searchButton.addEventListener('click', async function (e) {
    e.preventDefault();
    const input = document.querySelector('#gifSearch');
    const searchTerm = input.value;
    const gifURL = await searchGifs(searchTerm);
    input.value = '';
    const gifSection = document.querySelector('#gifSection');
    const img = document.createElement('img');
    img.src = gifURL;
    gifSection.append(img);
})



async function searchGifs(search) {
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q: search,
            api_key: 'LuzmrXfvWZy3PuqBQIXP2965MdrfLmul'
        }
    });
    const randomValue = Math.floor(Math.random() * 50);
    return res.data.data[randomValue].images.original.url;
}