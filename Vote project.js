
let TotalVotes=0;
let RamVotes= 0;
let VibhaVotes=0
let ShreyaVotes=0;

const c1= document.getElementById("candidate1")
const c2= document.getElementById("candidate2")
const c3=document.getElementById("candidate3")

//POST DATA_______________________________________________________________________________
function handleformSubmit(event) {
    event.preventDefault();
    const myobj = {
        studentName: event.target.studentName.value,
        chooseMonitor: event.target.chooseMonitor.value,
    }
    axios.post("https://crudcrud.com/api/be2e5ecdb928479ca70e8035707c6edd/vote", myobj)
        .then((result) => {
            displayUser(result.data)
            displayCount()
            updateVotesDisplay()
            console.log(result)

        }).catch((error) => {
            console.log(error)
        })

}

//INCREASE COUNT INDIVIDUALLY__________________________________________________________
function displayCount(){
    TotalVotes++
    updateVotesDisplay()
}

function updateVotesDisplay(){
    const inTotalVotes= document.getElementById("totalVotes");
    inTotalVotes.textContent= `${TotalVotes}`   
}

function ramV(){
    c1.textContent= `${RamVotes}`  
}

function vibhaV(){
    c2.textContent= `${VibhaVotes}`
}

function shreyaV(){
    c3.textContent= `${ShreyaVotes}`
}


//DISPLAY, DELETE INDIVIDUALLY, INDIVIDUAL LI______________________________________________________
function displayUser(myobj) {
    const ulRam = document.getElementById("ram1")
    const ulVibha = document.getElementById("vibha1")
    const ulShreya = document.getElementById("shreya1")


    const newLi = document.createElement("li")
    newLi.appendChild(document.createTextNode(`${myobj.studentName} - ${myobj.chooseMonitor} `))


    const deleteButton = document.createElement('button')
    deleteButton.innerText = "DELETE"
    deleteButton.id = `deleteBtn_${myobj.studentName}_${myobj.chooseMonitor}`
    deleteButton.addEventListener("click", function(event){
        event.preventDefault()
        const itemId= myobj._id;

        if (myobj.chooseMonitor === "Ram") {
            RamVotes--;
            ramV();
        } else if (myobj.chooseMonitor === "Vibha") {
            VibhaVotes--;
            vibhaV();
        } else if (myobj.chooseMonitor === "Shreya") {
            ShreyaVotes--;
            shreyaV();
        }

        TotalVotes--;
        updateVotesDisplay();

        axios.delete(`https://crudcrud.com/api/be2e5ecdb928479ca70e8035707c6edd/vote/${itemId}`)
        .then((result) => {
            console.log(result);
            const nowDel= event.target.parentNode;
            nowDel.parentNode.removeChild(nowDel)
          })
          .catch((error) => {
            console.log(error);
          });
    })
     newLi.appendChild(deleteButton)
    

    if (myobj.chooseMonitor === "Ram") {
        ulRam.appendChild(newLi)
        RamVotes++
        ramV()

    } else if (myobj.chooseMonitor === "Vibha") {
        ulVibha.appendChild(newLi)
        VibhaVotes++
        vibhaV()
    } else if (myobj.chooseMonitor === "Shreya") {
        ulShreya.appendChild(newLi)
        ShreyaVotes++
        shreyaV()
    }
}



//GET DATA WITH RELOADING THE PAGE_________________________________________________________-
window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/be2e5ecdb928479ca70e8035707c6edd/vote")
    .then((result)=>{
        console.log(result)
        for(i=0; i<result.data.length; i++){
            displayUser(result.data[i])
            displayCount()
            updateVotesDisplay()

        }
    }). catch((error)=>{
        console.log(error)
    })
  })



















