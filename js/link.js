

//discover new

document.getElementById('discover-btn')
    .addEventListener('click', function () {
        document.location.href = "discover.html";
    });



// clear history button


document.getElementById('clear-btn')
    .addEventListener('click', function () {

        const container = document.getElementById('activ-log');
        const msg = document.getElementById('msg');
        msg.remove();


    })

//setting current Date
const newday = new Date();
let currDate = newday.toDateString();
document.getElementById("current-date").innerHTML = currDate ;
