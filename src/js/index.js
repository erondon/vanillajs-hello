/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["ate", "pissed", "crushed", "broke"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function randWord(word) {
    let randEx = Math.floor(Math.random() * word.length);
    return randEx;
  }

  let sentence =
    who[randWord(who)] +
    "  " +
    what[randWord(what)] +
    "  " +
    when[randWord(when)];

  document.getElementById("excuse").innerHTML = sentence;
};
