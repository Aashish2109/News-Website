const API_KEY="77e371288d9e4172bba867145ba825bd"
const url="https://newsapi.org/v2/everything?q="
window.addEventListener('load',()=>fetchNews("India"));
async function fetchNews(query)
{
    const res=await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data=await res.json();
    console.log(data);
}