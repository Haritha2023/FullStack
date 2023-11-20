let addbtn = document.querySelector(".add-button");
let addflag = false;
popCont = document.querySelector(".popup-container");
mainCont = document.querySelector(".main-container");
let textAreaCont = document.querySelector(".textarea-container");
addbtn.addEventListener("click", function () {
  addflag = !addflag;
  console.log("Add button clicked");
  console.log(addflag);
  if (addflag == true) {
    popCont.style.display = "flex";
  } else {
    popCont.style.display = "none";
  }
});

popCont.addEventListener("keydown", function (e) {
  let key = e.key;
  //   console.log(key);
  if (key == "Shift") {
    // console.log("Ticket has created");
    createTicket(textAreaCont.value);
  }
});

function createTicket(ticketTask) {
  //   console.log("Creating Ticket...");
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-container");
  ticketCont.innerHTML = `<div class="color-priority"></div>
  <div class="id-container">15468xyz</div>
  <div class="task-container">${ticketTask}</div>
  <div class="lock-btn">
    <i class="fa-solid fa-lock"></i>
  </div>`;
  mainCont.appendChild(ticketCont);
  popCont.style.display = "none";
}
