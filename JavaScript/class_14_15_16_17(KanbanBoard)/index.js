let AddBtn = document.querySelector(".add-btn");

AddBtn.addEventListener("click", function (e) {
  console.log("Add button is working ");
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  console.log(ticketCont);
  //   ticketCont.innerHTML = `<div class="ticket-color"></div>
  //   <div class="ticket-id">123456</div>
  //   <div class="ticket-task">Demo Task</div>
  //   <div class="lock-btn"><i class="fa-solid fa-lock"></i></div>`;
  ticketCont.innerHTML = `<h1>Hello world</h1>`;
});
