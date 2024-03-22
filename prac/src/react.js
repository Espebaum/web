export class Component {

}

function renderRealDOM(vdom) // 재귀적으로 실행됨
{ 
    if (typeof vdom === 'string') {
        return document.createTextNode(vdom);
    }
    
    if (vdom === undefined) 
        return ;

    const $el = document.createElement(vdom.tagName);

    const arr = vdom.children.map(renderRealDOM);
    // console.log(arr);

    arr.forEach(node=>{
        $el.appendChild(node); // $el -> 껍데기
    })
    
    return $el;
}

export const render = (function() {
    let prevVdom = null;
    return function(nextVdom, container) {
        if (prevVdom === null) {
            prevVdom = nextVdom;
        }
        container.appendChild(renderRealDOM(nextVdom));
    }
})();

// function render() {
    // let prevVdom = null;
    // return function(nextVdom, container) {
    //     if (prevVdom === null) {
    //         prevVdom = nextVdom;
    //     }
    //     container.appendChild(renderRealDOM(nextVdom));
    // }
// }

export function createElement(tagName, props, ...children) {
    if (typeof tagName === 'function') {
        // 사용자 정의 컴포넌트 function someComponent();
        return tagName(props, ...children)
    }
    return { tagName, props, children };
}

