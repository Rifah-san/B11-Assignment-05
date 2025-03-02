

//from index to blog

document.getElementById('discover-btn')
    .addEventListener('click', function () {
        document.location.href = "blog.html";
    });


// clear history button


document.getElementById('clear-btn')
    .addEventListener('click', function (event) {

        const container = document.getElementById('activ-log');
        container.innerHTML= '';
        


    })


//setting current Date
const newday = new Date();
let currDate = newday.toDateString();
document.getElementById("current-date").innerHTML = currDate ;

//bg-color changing btn

document.getElementById('bgcolor-btn')
.addEventListener('click',function(){
    const colors = ['bg-pink-300','bg-red-300','bg-orange-200','bg-green-200','bg-yellow-200'];

    let bg = document.body;
    bg.classList.remove(...colors);

    let randomclr = colors[Math.floor(Math.random()*colors.length)];
    bg.classList.add(randomclr);
})