const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
  "you are beautiful.",
  "choose yourself, you're the only person you'll spend your whole life with",
  "be happy",
  "you are a creator, don't let anyone else convince you otherwise",
  "the grind you're putting in will be worth it, even if it doesn't feel that way right now",
  "keep learning, keep asking, and you'll keep getting better",
];

button.addEventListener("click", () => {
    globe.classList.add("shaking");
    setTimeout (() =>globe.classList.remove("shaking"), 600);

     const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});