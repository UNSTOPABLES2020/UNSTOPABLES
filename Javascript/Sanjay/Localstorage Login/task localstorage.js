function signin() {
    var username = document.getElementById("username").Value;
    var password = document.getElementById("pass").Value;

    var user = {
        username: username,
        password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('user added');
    var print = localStorage.getItem(user);
    var print1 = JSON.parse(print);
    document.getElementById("print").innerHTML = print1;
}