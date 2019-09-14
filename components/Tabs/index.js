// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then((results) => {

    console.log(results);  

    results.data.topics.forEach((topic) => {
        const insertTab = Tab(topic)
        return insertTab
    })

})

.catch((error) => {

    console.log(error);
    
})    

const newTopics = document.querySelector('.topics');

function Tab(tabName) {
    const div1 = document.createElement('div');
    div1.classList.add('tab');
    div1.textContent = tabName
    newTopics.appendChild(div1);

    return (div1)
}