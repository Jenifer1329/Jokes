function joke(){
    fetch(`https://official-joke-api.appspot.com/random_joke`).then(data => data.json()).then(data => displaydata(data));
}
function displaydata(data){
    console.log(data);
    let punchline=data.punchline;
    let setup=data.setup;  
    let result=document.getElementsByClassName('details')[0];
    result.innerHTML=`<h2>${setup}<br><h2>
    ${punchline}<br>` 
}