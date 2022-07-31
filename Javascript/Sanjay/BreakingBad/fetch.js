fetch("https://www.breakingbadapi.com/api/characters?limit=10").then((data) => {
        return data.json();
    }).then((comdata) => {
        let data1 = " ";
        localStorage.setItem()
        comdata.map((values) => {
            data1 += `<img src = "${values.img}" class = "profile" alt = "img" >
        <p class = "name" > ${values.name} </p> 
        <p class = "birthday" >${values.birthday} </p> 
        </div>`
        });
        document.getElementById("cards").innerHTML = data1;
    })
    .catch((err) => {
        console.log(err);
    });