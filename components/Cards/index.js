// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then((results) => {
    console.log(results);  

    Object.values(results.data.articles).forEach((article) => {
        article.forEach((article) =>{
            const newCard = document.querySelector('.cards-container');
            newCard.appendChild(createCard(article));
        })
    })
})

.catch((error) => {
    console.log(error);
})    

function createCard(data) {
    
// Elements & Style

    const div1 = document.createElement('div');
    div1.classList.add('card');

    const div2 = document.createElement('div');
    div2.classList.add('headeline')
    div2.textContent = data.headline;

    const div3 = document.createElement('div');
    div3.classList.add('author');

    const div4 = document.createElement('div');
    div4.classList.add('img-container')

    const img = document.createElement('img');
    img.src = data.authorPhoto;

    const span1 = document.createElement('span');
    span1.textContent = data.authorName;

    console.log (div1);

// Structure

div4.appendChild(img); 
div3.appendChild(div4);
div3.appendChild(span1)
div2.appendChild(div3);
div1.appendChild(div2);
   
    return div1;
}


