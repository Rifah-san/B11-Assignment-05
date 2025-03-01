document.getElementById('discover-btn')
.addEventListener('click',function(){
    document.location.href = "discover.html";
});

// clear history button


document.getElementById('clear-btn')
.addEventListener('click',function(){
    const message = document.getElementById('msg');
    message.innerText = '';
    const container = document.getElementById('activ-log');
    container.appendChild(message);
    
})
