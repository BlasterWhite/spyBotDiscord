console.log("Script receive.js chargé !");

const ws = new WebSocket("ws://localhost:8882");

ws.addEventListener("open", () => {
    console.log("We are connected!");
    ws.send("Waiting to display your informations");
});

ws.addEventListener("message", ({ data }) => {
    console.log(data);
    value = data.split(" ");
    var i = 3;
    var msg = [''];
    for(i; i< value.length; i++) {
        msg.push((value[i]))
        console.log((value[i]));
    }
    console.log(msg.join(' '));
    document.getElementById('tableau').innerHTML += `<tr><td><img src="${value[0]}" style="height: 50px;"></td><td>${value[1]}</td><td>${value[2]}</td><td>${msg.join(' ')}</td></tr>`;
});