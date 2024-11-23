let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let countdown = 10;

let intervalId = setInterval(function() {
    countdown = countdown - 1;
    timerEl.textContent = countdown;
    if (countdown === 0) {
        timerEl.textContent = "BOOM";
        document.getElementById("bomb").src = "https://as1.ftcdn.net/v2/jpg/03/13/59/08/1000_F_313590888_HLY2XXpqf0Z1H4gMM4alpiGxiaIXyjX5.jpg";
        document.getElementById("bomb").classList.add("bomb-image");
        clearInterval(intervalId);
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let bombDefuserText = defuserEl.value;
    if (event.key === "Enter" && bombDefuserText === "defuse" && countdown !== 0) {
        timerEl.textContent = "You did it!";
        clearInterval(intervalId);
    }
});