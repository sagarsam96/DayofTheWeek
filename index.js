const showDate = document.getElementById("date");

//functions
const create=(ele)=>{ return document.createElement(ele) }
const addNode=(parent, child)=>{ parent.appendChild(child);}

//basic date
const date = new Date();

//Arrays
const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months= ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// initiallizing of values to variables
let serial = date.getDay(), 
serialDate= date.getUTCDate(), 
serialMonth= date.getMonth(),
serialYear = date.getFullYear();


//condition for the suffix with date
if(serialDate%10==2){ spl = "nd"}
else{ if(serialDate%10===3){ spl = "rd"}else{ spl = "th"}}

showDate.innerText=`${serialDate}${spl} ${months[serialMonth]} / ${serialYear} ${days[serial]}  and next 5 days are: `; 

for(let i=serial+1; i<serial+6; i++){
    let show = i%6;
    console.log(days[show]);
    const li = create("li");
    li.innerText= days[show];
    addNode(showDate, li);

}

