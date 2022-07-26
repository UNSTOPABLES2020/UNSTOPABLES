let pusinguserdetails=JSON.parse(localStorage.getItem('userName'))
if(!pusinguserdetails)
{
 pusinguserdetails=[];
}
function getDetails(event) {
event.preventDefault();
 const data =document.querySelector('.username').value;
 document.querySelector('.username').value=''
 APIFetch();
}
function storingInLocalStg(gotdata) {  
     pusinguserdetails.push(gotdata)
    localStorage.setItem('userName',JSON.stringify(pusinguserdetails));
   displayData();  
}
function displayData(pokeData)
{
   let allPokemonData = document.querySelector('recieveddata');

    let dataContainer =document.createElement("div")


    let nameContainer =document.createElement("h4")

    nameContainer =pokeData.name
    console.log(nameContainer)

}
function APIFetch()
{
    let url =' https://pokeapi.co/api/v2/pokemon/2'
    fetch(url)
    .then(data => {
        data.json()
        .then(dataover =>
        {
            storingInLocalStg(dataover);
        })
    });
}  

