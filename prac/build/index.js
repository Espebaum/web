/* @jsx createElement */
import { createElement, render, Component } from './react.js';
class YourTitle extends Component {
  render() {
    return createElement("p", null, "\uB098\uB294 \uCC9C\uC7AC\uAC00 \uB418\uACE0\uC2F6\uC5B4!");
  }
}
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
  }, "with me")), createElement(YourTitle, null));
}

// console.log(Title());
render(createElement(Title, null), document.querySelector('#root'));