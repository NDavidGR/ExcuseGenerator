/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#button1").addEventListener("click", () => {
    document.querySelector("#excuses").innerHTML = excuseGenerator();
  });
};

function excuseGenerator() {
  let who = ["My boss", "Your wife", "My pet rock", "A scary clown"];
  let action = ["stole", "bit", "damage", "burst"];
  let what = [
    "the tire of my car",
    "my right eye",
    "my rat trap",
    "my flea collection"
  ];
  let when = [
    "five minutes ago",
    "in the mornig",
    "late yesterday",
    "in my break",
    "just right now"
  ];

  let whoInd = Math.floor(Math.random() * who.length);
  let actInd = Math.floor(Math.random() * action.length);
  let whatInd = Math.floor(Math.random() * who.length);
  let whenInd = Math.floor(Math.random() * who.length);

  return (
    who[whoInd] +
    " " +
    action[actInd] +
    " " +
    what[whatInd] +
    " " +
    when[whenInd] +
    " "
  );
}
