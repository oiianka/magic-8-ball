const inputFormRef = document.querySelector("#text");
const answerRef = document.querySelector("#answer");
const buttonAsk = document.querySelector("#questionButton");
const ballImgRef = document.querySelector("#ball-img");

let listOfAnswers = [];

answerRef.classList.add("hide");



//This function shake the ball (visually)
const shakeMagicBall = () => {
  ballImgRef.classList.add("shake");
  setTimeout(() => {ballImgRef.classList.remove("shake")}, 500);
}

// This function slowly show the answer (visually)
const fadeInMagicBaLL = () => {
  answerRef.classList.remove("fade-out-text");
  answerRef.classList.add("fade-in-text");
}

const magicBallBack = () => {
  answerRef.classList.remove("fade-in-text");
  answerRef.classList.add("fade-out-text");
  shakeMagicBall();
  ballImgRef.setAttribute("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png")
}


//This function find the answer
const MagicBallGiveAnswer = () => {
  shakeMagicBall();

  listOfAnswers = ["Так", "Ні", "Не думаю", "Може бути", "Звісно!", "У мріях", "Запитай потім"];

  let inputResult = inputFormRef.value.toLowerCase();

  if (inputResult == "") {
    swal({
      title: "Агов!",
      text: "Задайте хоч якесь питання!",
      icon: "warning",
      button: "Добре",
    });
    return;
  }

  if (inputResult.includes("ы") || inputResult.includes("ъ") || inputResult.includes("ё") || inputResult.includes("э")) {
    magicBallBack();
    inputFormRef.value = "";
    swal({
      title: "Ви ж не москаль?",
      text: "Пишіть українською!",
      icon: "error",
      button: "Добре",
    });
    return;
 };

 if (inputResult.includes("путін") || inputResult.includes("путин") || inputResult.includes("putin") || inputResult.includes("pytin")) {
  listOfAnswers = ["путін скоро здохне", "путін помре завтра", "путін вмре в муках", "путіна вб'ють на днях", "путіну відірве ноги"]
 }
 

  ballImgRef.setAttribute("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
  
  fadeInMagicBaLL();

  inputFormRef.value = "";

  const randomNumber = Math.random();
  const randomIndex = Math.round(randomNumber * (listOfAnswers.length - 1));

  answerRef.textContent = listOfAnswers[randomIndex];

  setTimeout(magicBallBack, 3500);

  
}

buttonAsk.addEventListener("click", _.throttle(MagicBallGiveAnswer, 5000));


