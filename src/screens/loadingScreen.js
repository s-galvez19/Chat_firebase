import $ from 'jquery';
import {session} from '../session';



export default
    function mountLoadingScreen() {
    $('#root').html(loadingScreen());

    setTimeout(() => {
        session();
    }, 2000);
}

function loadingScreen() {
    let container = document.createElement('div');
  
    container.id = 'loading-screen';
    container.classList.add('loading-screen');
    container.innerHTML = `
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    `;
  
    return container;
  }