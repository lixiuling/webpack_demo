import _ from 'lodash';
import './less/style.less';
import Img from './images/blend/blend7.jpg';
import Data from './data/data.xml';
import printMe from './print.js';

function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello ', 'webpack'], '');
    btn.innerHTML = "Click me and check the console!";

    btn.onclick = printMe;
    element.appendChild(btn)

    element.classList.add('hello');

    var myImg = new Image();
    myImg.src = Img;
    element.appendChild(myImg);

    console.log(Data)

    return element;
}

let element = component();
document.body.appendChild(element);

if(module.hot){
    module.hot.accept('./print.js', () => {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}