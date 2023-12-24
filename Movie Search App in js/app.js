const ApiUrl  = 'http://www.omdbapi.com/?s='
const ApiKey = 'apikey=873f25bb&page=1'
const PosterDiv = document.querySelector('#PosterDiv')
const posterCard = document.querySelector('.poster')
const posterImg = document.querySelector('.posterImg')

const fetchingApi = async(query)=>{
    const data = await fetch(`${ApiUrl}${query}&${ApiKey}`)
    const values = await data.json()
    allData(values.Search)
}

let SearchBtn = document.querySelector('.searchIcon')
let inputValue = document.querySelector('input')

    SearchBtn.addEventListener('click',()=>{
        fetchingApi(inputValue.value)
    })
    inputValue.addEventListener('keyup',(e)=>{
        if(e.key === 'Enter'){
            fetchingApi(inputValue.value)
        }
    })






// const allData = (data)=>{
//     console.log(data);
//     data?.map((items)=>{
//         const movieCard = document.createElement('div')
//         movieCard.innerHTML = `<div class="poster" >
//         <img src=${items?.Poster} alt=${items?.Title} class="posterImg">
//         <div class="details">
//           <h3 id="title">Title: <span class='boldText'> ${items?.Title}</span></h3>   
//           <div class="subDetails">
//             <p>Year: <span class='Type'>${items?.Year}</span></p>
//             <p>Type: <span class='Type'>${items.Type}</span></p>
//           </div>
//       </div>
//       </div>`;
//       PosterDiv.appendChild(movieCard)
//     })
// }


const allData = (data) => {
    PosterDiv.innerHTML = '';
    data?.map((items) => {
        const movieCard = document.createElement('div');
        movieCard.innerHTML = `<div class="poster">
            <img src=${items?.Poster} alt=${items?.Title} class="posterImg">
            <div class="details">
                <h3 id="title">Title: <span class='boldText'> ${items?.Title}</span></h3>
                <div class="subDetails">
                    <p>Year: <span class='Type'>${items?.Year}</span></p>
                    <p>Type: <span class='Type'>${items.Type}</span></p>
                </div>
            </div>
        </div>`;
        PosterDiv.appendChild(movieCard);
    });
}
