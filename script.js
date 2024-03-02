////  Creating container for screen responsive
const container = document.createElement('div');
container.className='container';
container.id='mainContaine'

/// Creating row
const row = document.createElement('div')
row.className='row';
row.id='mainRow';

//// Creating col elment for display joke content
let col = document.createElement('div')
col.className='col col-md-12'
col.id='mainCol'
col.innerHTML=`<div class="card">
<div class="card-header">
  Jokes
</div>
<div class="card-body">
  <h5 class="card-title" id = "category">JOKE CATEGORY</h5>
  <p class="jokesCntnt" id = "jokesCntnt1">Qustion</p>
  <p class="jokesCntnt" id = "jokesCntnt2">Answer</p>
  <a href="#" class="btn btn-primary" onClick = "changeJoke(this)">NEXT</a>
</div>
</div>`

////////  function for Fetching API and change the jokes in the content

async function changeJoke(currEle){
    const fetchAPI = await fetch('https://v2.jokeapi.dev/joke/Any')
    const fetchAPIread = await fetchAPI.json()  // converting readable stream to json object
    let jokesEle1 =  currEle.parentElement.querySelector('#jokesCntnt1')
    let jokesEle2 =  currEle.parentElement.querySelector('#jokesCntnt2')
    let jokesType =  currEle.parentElement.querySelector('#type')
    let jokesCat =  currEle.parentElement.querySelector('#category')
    if(fetchAPIread.setup){
        jokesEle1.innerHTML=`Qustion : ${fetchAPIread.setup}`
        jokesEle2.innerHTML=`Answer : ${fetchAPIread.delivery}`
    }
    else{
        jokesEle1.innerHTML=`Joke : ${fetchAPIread.joke}`
        jokesEle2.innerHTML='';
    }
    jokesCat.innerHTML=`JOKE CATEGORY : ${fetchAPIread.category}`    
}
row.append(col);
container.append(row);
document.body.append(container);
