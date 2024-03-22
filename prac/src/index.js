/* @jsx createElement */
import {createElement, render} from './react.js'

class YourTitle extends Component{
    render() {
      return (
        <p>나는 타이틀이 되고싶어!</p>
      );
    }
  }
  

function Title() { // JSX 문법을 사용하여 작성된 React Component
    return (
        <div>
            <div>
                <h2 id="feel">I feel good</h2>
                <h2 id="you">with you</h2>
            </div>
            <div>
                <h2 id="feel">How do you feel</h2>
                <h2 id="you">with me</h2>
            </div>
        </div>
    );
}

// console.log(Title());
render(<Title />, document.querySelector('#root'));