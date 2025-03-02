// for task button 1

const taskbtn1 = document.getElementById('taskbtn-1')
document.getElementById('taskbtn-1')
.addEventListener('click',function(){
    alert('Board Updated successfully');
    taskbtn1.classList.add('btn-disabled');
    taskbtn1.Disabled = true;
     
    calTask();
    calTotaltask();
    taskNotify('Fix Mobile Button Issue');

})
// for task button 2

const taskbtn2 = document.getElementById('taskbtn-2')
document.getElementById('taskbtn-2')
.addEventListener('click',function(){
    alert('Board Updated successfully');
    taskbtn2.classList.add('btn-disabled');
    taskbtn2.Disabled = true;
     
    calTask();
    calTotaltask();
    taskNotify('Add Dark Mode');

})
// for task button 3

const taskbtn3 = document.getElementById('taskbtn-3')
document.getElementById('taskbtn-3')
.addEventListener('click',function(){
    alert('Board Updated successfully');
    taskbtn3.classList.add('btn-disabled');
    taskbtn3.Disabled = true;
     
    calTask();
    calTotaltask();
    taskNotify('Optimize Home page');

})
// for task button 4

const taskbtn4 = document.getElementById('taskbtn-4')
document.getElementById('taskbtn-4')
.addEventListener('click',function(){
    alert('Board Updated successfully');
    taskbtn4.classList.add('btn-disabled');
    taskbtn4.Disabled = true;
     
    calTask();
    calTotaltask();
    taskNotify('Add new emoji');

})
// for task button 5

const taskbtn5 = document.getElementById('taskbtn-5')
document.getElementById('taskbtn-5')
.addEventListener('click',function(){
    alert('Board Updated successfully');
    taskbtn5.classList.add('btn-disabled');
    taskbtn5.Disabled = true;
     
    calTask();
    calTotaltask();
    taskNotify('Improve Job searching');

})
// for task button 6

const taskbtn6 = document.getElementById('taskbtn-6')
document.getElementById('taskbtn-6')
.addEventListener('click',function(){
    alert('Board Updated successfully');
    taskbtn6.classList.add('btn-disabled');
    taskbtn6.Disabled = true;
     
    calTask();
    calTotaltask();
    taskNotify('Fix Mobile Button Issue');

})


function calTask(){
    const tasks = document.getElementById('task-count');
    const count = parseInt(tasks.innerText);
    const result = (count - 1);

    if(result === 0){
        alert('Congratulations! You have successfully completed all task.');
    }  

    tasks.innerText = result;
}
function calTotaltask(){
    const checkbox = document.getElementById('check-box');
    const count = parseInt(checkbox.innerText);
    const result = (count + 1);

    checkbox.innerText = result;
}
function taskNotify(title){
    // const taskname = document.querySelectorAll('.task-title');
    const activityLog = document.getElementById('activ-log');
    const notification = document.createElement('p');
    const timecontainer = document.createElement('span');
    const text = document.getElementById('msg');

    notification.id = ('msg');
    notification.classList.add('bg-blue-50', 'p-2','my-2','text-sm');

    const newtime = new Date();
    let currtime = newtime.toLocaleTimeString();
    timecontainer.innerHTML = currtime;

    let update = currtime;

    const message = 'You have Completed The Task ' + title + ' at ' + update;

    notification.innerText = message;

    activityLog.appendChild(notification);
}