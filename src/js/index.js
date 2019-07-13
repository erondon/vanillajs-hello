/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randWho = Math.floor(Math.random() * who.length);
  let randWhat = Math.floor(Math.random() * what.length);
  let randWhen = Math.floor(Math.random() * when.length);

  let sentence = who[randWho] + " " + what[randWhat] + " " + when[randWhen];

  document.getElementById("excuse").innerHTML = sentence;
};
