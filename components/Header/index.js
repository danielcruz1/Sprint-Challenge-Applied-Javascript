// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');

function Header() {
    const div1 = document.createElement('div');
    div1.classList.add('header');

    const span1 = document.createElement('span');
    span1.classList.add('date');
    span1.textContent = 'March 28, 2019';

    const h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';

    const span2 = document.createElement('span');
    span2.classList.add('temp')
    span2.textContent = '98°'

    headerContainer.appendChild(div1);
    div1.appendChild(span1);
    div1.appendChild(h1);
    div1.appendChild(span2);
    
    console.log(div1)
}

const newHeader = Header()


    