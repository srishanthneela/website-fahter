let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else
        sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-panel");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
  

// START CLOCK SCRIPT

Number.prototype.pad = function(n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  var now = new Date();
  var milli = now.getMilliseconds(),
    sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours(),
    mo = now.getMonth(),
    dy = now.getDate(),
    yr = now.getFullYear();
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var tags = ["mon", "d", "y", "h", "m", "s", "mi"],
    corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2), milli];
  for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

// END CLOCK SCRIPT

$(document).ready(function () {
    $(".notification_icon .fa-bell").click(function () {
        $(".dropdown").toggleClass("active");
    })
});

function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < home - content.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();

    function openSlideMenu(){
        document.getElementById('menu').style.width = '300px'
    }
    function closeSlideMenu(){
        document.getElementById('menu').style.width = '0';
    }
    
    let tabHeader = document.getElementsByClassName("tab-header")[0];
    let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
    let tabBody = document.getElementsByClassName("tab-body")[0];
    
    let tabsPane = tabHeader.getElementsByTagName("div");
    
    for(let i=0;i<tabsPane.length;i++){
    tabsPane[i].addEventListener("click",function(){
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");
        
        tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
    });
    }
    // getting all required elements
        const inputBox = document.querySelector(".inputField input");
        const addBtn = document.querySelector(".inputField button");
        const todoList = document.querySelector(".todoList");
        const deleteAllBtn = document.querySelector(".footer button");
        // onkeyup event
        inputBox.onkeyup = ()=>{
        let userEnteredValue = inputBox.value; //getting user entered value
        if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
            addBtn.classList.add("active"); //active the add button
        }else{
            addBtn.classList.remove("active"); //unactive the add button
        }
        }
        showTasks(); //calling showTask function
        addBtn.onclick = ()=>{ //when user click on plus icon button
        let userEnteredValue = inputBox.value; //getting input field value
        let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
        if(getLocalStorageData == null){ //if localstorage has no data
            listArray = []; //create a blank array
        }else{
            listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
        }
        listArray.push(userEnteredValue); //pushing or adding new value in array
        localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
        showTasks(); //calling showTask function
        addBtn.classList.remove("active"); //unactive the add button once the task added
        }
        function showTasks(){
        let getLocalStorageData = localStorage.getItem("New Todo");
        if(getLocalStorageData == null){
            listArray = [];
        }else{
            listArray = JSON.parse(getLocalStorageData); 
        }
        const pendingTasksNumb = document.querySelector(".pendingTasks");
        pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask
        if(listArray.length > 0){ //if array length is greater than 0
            deleteAllBtn.classList.add("active"); //active the delete button
        }else{
            deleteAllBtn.classList.remove("active"); //unactive the delete button
        }
        let newLiTag = "";
        listArray.forEach((element, index) => {
            newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
        });
        todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
        inputBox.value = ""; //once task added leave the input field blank
        }
        // delete task function
        function deleteTask(index){
        let getLocalStorageData = localStorage.getItem("New Todo");
        listArray = JSON.parse(getLocalStorageData);
        listArray.splice(index, 1); //delete or remove the li
        localStorage.setItem("New Todo", JSON.stringify(listArray));
        showTasks(); //call the showTasks function
        }
        // delete all tasks function
        deleteAllBtn.onclick = ()=>{
        listArray = []; //empty the array
        localStorage.setItem("New Todo", JSON.stringify(listArray)); //set the item in localstorage
        showTasks(); //call the showTasks function
        }