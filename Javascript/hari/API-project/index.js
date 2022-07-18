fetch('https://www.breakingbadapi.com/api/characters?limit=10').then((data)=>{

    //console.log(data);
    return data.json();
    
}).then((completetheproject)=>{

  /*  console.log(completetheproject[2].title);
    document.getElementById('root').
    innerHTML=completetheproject[2].title;*/
    let data1="";
    completetheproject.map((values)=>{
        data1+=`<div class="card">
        <h1 class="title">
            ${values.name}
        </h1>
        <img  class="img" src=${values.img} alt="img">
        <p>
            ${values.nickname}
        </p>
        <p class="category">
          ${values.status}
        </p>
        <p class="price">
            ${values.birthday}
        </p>
    </div>`;
    });
    document.getElementById("cards").innerHTML=data1;

}).catch((error)=>{
    console.log(error);
})
