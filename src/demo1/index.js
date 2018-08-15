import _ from 'lodash';
require('./less/style.less');
import Img from './images/blend/blend7.jpg';
import Data from './data/data.xml';
import printMe from './print.js';

function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var br = document.createElement('br');

    element.innerHTML = _.join(['Hello ', 'webpack'], '');
    btn.innerHTML = "Click me and check the console!";

    element.appendChild(btn);
    element.appendChild(br);
    element.classList.add('hello');

    btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(moudle => {
        var print = moudle.default;
        print()
    })

    var myImg = new Image();
    myImg.src = Img;
    element.appendChild(myImg);

    return element;
}

document.body.appendChild(component());



// function getComponent() {
//     return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//         var element = document.createElement('div');
//         var btn = document.createElement('button');

//         element.innerHTML = _.join(['Hello ', 'webpack'], '');
//         btn.innerHTML = "Click me and check the console!";

//         btn.onclick = printMe;
//         element.appendChild(btn)

//         element.classList.add('hello');

//         var myImg = new Image();
//         myImg.src = Img;
//         element.appendChild(myImg);

//         return element;

//     }).catch(error => 'An error occurred while loading the component');
// }

// getComponent().then(component => {
// document.body.appendChild(component);
// })



// if(module.hot){
//     module.hot.accept('./print.js', () => {
//         console.log('Accepting the updated printMe module!');
//         document.body.removeChild(element);
//         element = component();
//         document.body.appendChild(element);
//     })
// }