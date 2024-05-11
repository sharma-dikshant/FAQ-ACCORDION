const questions = Array.from(document.querySelectorAll(".question"));
const answers = Array.from(document.querySelectorAll(".answer"));
const plusImages = Array.from(document.querySelectorAll(".question img"));

console.log(questions);
console.log(answers);

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    answers[index].classList.toggle("hide");

    if (!answers[index].classList.contains("hide")) {
      plusImages[index].src = "assets/images/icon-minus.svg";
      console.log("image changed ");
    } else {
      plusImages[index].src = "assets/images/icon-plus.svg";
    }
  });
});
