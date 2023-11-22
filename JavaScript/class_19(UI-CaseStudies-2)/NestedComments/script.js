let commentContainer = document.querySelector(".comment-container");

function createInbox() {
  let div = document.createElement("div");
  div.setAttribute("class", "comment-reply-section");
  div.innerHTML = `<input type="text" class="input-text" placeholder="Add a Comment" />
    <button class="btn-submit">Submit</button>`;

  return div;
}

function addReply(text) {
  let div = document.createElement("div");
  div.setAttribute("class", "all-comments");
  div.innerHTML = `<div class="card">
    <span class="comment-text">${text}</span>
    <span class="add-reply">Add Reply</span>
  </div>`;
  return div;
}

commentContainer.addEventListener("click", function (e) {
  console.log(e.target);
  let replyBtnClicked = e.target.classList.contains("add-reply");
  console.log(replyBtnClicked);

  let submitBtnClicked = e.target.classList.contains("btn-submit");

  let closestCard = e.target.closest(".all-comments");
  console.log(closestCard);

  if (replyBtnClicked === true) {
    closestCard.appendChild(createInbox());
  }

  if (submitBtnClicked == true) {
    let commentClosest = e.target.closest(".comment-reply-section");

    if (commentClosest.children[0].value) {
      closestCard.appendChild(addReply(commentClosest.children[0].value));
      commentClosest.remove();
    }
  }
});
