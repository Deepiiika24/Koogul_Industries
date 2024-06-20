import React from 'react'
import '../Css/Aboutus.css';
import Logo from '../Images/Logo.png';
import Fruits from '../Images/Fruits.jpg';
import MasalaBg from '../Images/MasalaBg.avif';
function Aboutus() {
  window.onscroll = function () {
    myscrolsEvent();
}

function myscrolsEvent() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector(".header").classList.add("fixedClass");
    } else {

        document.querySelector(".header").classList.remove("fixedClass");
    }
}
// function googletranslateElementInit() {
//     new google.translate.TranslateElement(
//         { pagelanguge: 'en' },
//         'google_translate_element'
//     );

// }
  return (
    <div>
      <section>
    <div class="header">
      <div class="left"><img src={Logo} alt="Logo.png"/></div>
      <div class="rightmenu">
        <ul>
          <li>Home</li>
          <li>About-Us</li>
          <li>Products<i class="bi bi-chevron-down"></i></li>
          <li>Contact-Us</li>
        </ul>
      </div>
      {/* <div id="google_translate_element">
        <script src={googletranslateElementInit}></script>
      </div>
      <div id="function">
        <script src="script.js"></script>
      </div> */}
    </div>
  </section>
  <section class="container">
    <div class="container1">
    </div>
    <div class="container2">
      <img src={Fruits} alt=""></img>
    </div>
    <div class="container3">
      <img src={MasalaBg} alt=""></img>
    </div>
  </section>
    </div>
  )
}

export default Aboutus
