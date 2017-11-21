import _ from "lodash";
import "./style.css";
import Icon from "./icon2.png";

function component() {
  var element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  element.classList.add("hello");

  // add icon2 and image to the existing div.
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
