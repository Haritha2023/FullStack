// 1.pop up model box - add event listeners to button
let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".model-cont");
let mainCont = document.querySelector(".main-cont");
let textCont = document.querySelector(".textarea-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");

let modelPriorityColor = "lightPink";
let lockClass = "ticket-lock";
let unlockClass = "ticket-unlock";
let addTaskFlag = false; // for button true or false condition for clicking
//add event listeners to button
addBtn.addEventListener("click", function (e) {
  addTaskFlag = !addTaskFlag; //true
  console.log(addTaskFlag);
  if (addTaskFlag == true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

//2.add tickets -
// add event listeners to modalcont -
// create ticket-get value from text container display in ticket
modalCont.addEventListener("keydown", function (e) {
  let key = e.key;
  console.log(key);
  if (key == "Shift") {
    createTicket(textCont.value, modelPriorityColor);
  }
});

function createTicket(textCont, modelPriorityColor) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `<div class="ticket-color ${modelPriorityColor}"></div>
    <div class="ticket-id">
        1234567
     </div>
  
     <div class="ticket-task">
        ${textCont}
     </div>
  
     <div class="ticket-lock">
      <button>Locked</button>
     </div>
     `;

  mainCont.appendChild(ticketCont);
  modalCont.style.display = "none";

  handleLock(ticketCont);
}
//Add tasks according to active color
allPriorityColors.forEach(function (color) {
  console.log(color);
  color.addEventListener("click", function () {
    console.log(color, "selected");
    allPriorityColors.forEach(function (colorEle) {
      console.log(colorEle, "selected");
      colorEle.classList.remove("active");
    });
    color.classList.add("active");
    modelPriorityColor = color.classList[0];
    console.log(modelPriorityColor);
  });
});

function handleLock(ticket) {
  let ticketLockElem = document.querySelector(".ticket-lock");
  let ticketLockIcon = ticketLockElem.children[0];
  console.log(ticketLockIcon);
  let ticketTaskArea = document.querySelector(".ticket-task");

  ticketLockElem.addEventListener("click", function () {
    if (ticketLockElem.classList.contains(lockClass)) {
      ticketLockIcon.classList.remove(lockClass);
      ticketLockIcon.classList.add(unlockClass);
      //for editing the task
      ticketTaskArea.setAttribute("contenteditable", "true");
    } else {
      ticketLockIcon.classList.remove(unlockClass);
      ticketLockIcon.classList.add(lockClass);

      ticketTaskArea.setAttribute("contenteditable", "false");
    }

    // THIS IS FUNCTION FOR LOCK AND UNLOCK WITH BUTTON
    // if (ticketLockElem.classList.contains(lockClass)) {
    //   ticketLockElem.classList.remove(lockClass);
    //   ticketLockElem.classList.add(unlockClass);
    //   ticketLockIcon.innerText = "Unlocked";

    //   ticketTaskArea.setAttribute("contenteditable", "true");
    // } else {
    //   ticketLockElem.classList.remove(unlockClass);
    //   ticketLockElem.classList.add(lockClass);

    //   ticketLockIcon.innerText = "Locked";
    //   ticketTaskArea.setAttribute("contenteditable", "false");
    // }
  });
}
