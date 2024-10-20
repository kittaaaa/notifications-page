const readAllBtn = document.querySelector(".all-read-btn");
const unreadNotfins = Array.from(document.querySelectorAll(".unread"));
const unreadNotifisCount = document.querySelector(".no-of-notifications");
const unreadDots = Array.from(document.querySelectorAll(".unread-dot"));

const privateMsgs = Array.from(document.querySelectorAll(".private-msg"));
console.log(privateMsgs);
function markAllRead() {
    unreadNotfins.forEach((unread) => {
        unread.classList.remove("unread");
    });
    unreadNotifisCount.classList.add("hide");
    unreadDots.forEach( unreadDot => {
        unreadDot.classList.add("hide");
    });
}

privateMsgs[0].addEventListener("click", () => {
    privateMsgs[0].classList.toggle("change-bg");
})
readAllBtn.addEventListener("click", markAllRead);



