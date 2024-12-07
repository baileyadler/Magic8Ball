let userGreet = alert("Please follow the directions");
let userName = prompt("Write your name");
userName
  ? (document.getElementById("greeting").innerText = `Hello, ${userName}!`)
  : (document.getElementById("greeting").innerText = `Hello!`);

function shakeMagic8Ball() {
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = "";
  let responseImg;

  let userQuestion = prompt("Ask the Mighty 8 Ball a question?");
  switch (randomNumber) {
    case 0:
      eightBall = "Yes, It is certain";
      responseImg = "itiscertain.jpg";
      break;
    case 1:
      eightBall = "Yes, It is decidedly so";
      responseImg = "itissaidso.webp";
      break;
    case 2:
      eightBall = "No, Reply hazy try again";
      responseImg = "replyhazy.png";
      break;
    case 3:
      eightBall = "No, Cannot predict now";
      responseImg = "dontpredict.webp";
      break;
    case 4:
      eightBall = "No, Do not count on it";
      responseImg = "dontcountonit.jpg";
      break;
    case 5:
      eightBall = "No, My sources say no";
      responseImg = "sourcessayno.png";
      break;
    case 6:
      eightBall = "No, Outlook not so good";
      responseImg = "outlooknotsogood.png";
      break;
    case 7:
      eightBall = "Yes, Signs point to yes";
      responseImg = "signpointstoyes.jpg";
      break;
  }
  console.log(eightBall);
  document.getElementById(
    "response-text"
  ).innerText = `${userName} has asked the Magic 8 Ball${userQuestion}. The wise and wondrous 8 Ball has used its Magic and has replied ${eightBall}.`;
  document.getElementById("response-image").src = responseImg;
}
