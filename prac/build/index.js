/* @jsx createElement */
import { createElement, render } from './react.js';
function Title() {
  // JSX 문법을 사용하여 작성된 React Component
  return createElement("div", null, createElement("div", null, createElement("h2", {
    id: "feel"
  }, "I feel good"), createElement("h2", {
    id: "you"
  }, "with you")), createElement("div", null, createElement("h2", {
    id: "feel"
  }, "How do you feel"), createElement("h2", {
    id: "you"
  }, "with me")));
}

// console.log(Title());
render(createElement(Title, null), document.querySelector('#root'));