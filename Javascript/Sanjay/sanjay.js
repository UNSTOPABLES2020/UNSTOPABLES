    fetch("https://www.breakingbadapi.com/api/characters?limit=10").then((data) => {
        return data.json();
    }).then((wholedata) => {
        let data1 = "";
        wholedata.map((value) => {
            data1 += ` <div class="container>
            <img src = "${value.img}" class = "profile" alt = "img" >
                <p class = "name" > ${value.name} </p> 
                <p class = "birthday" >${value.birthday} </p> 
                <p class = "occupation" >${value.occupation} </p>
                </div> `;
        });
        document.getElementById("cards").innerHTML = data1;
    }).catch((err) => {
        console.log(err);
    })