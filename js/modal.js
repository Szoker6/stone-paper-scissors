"use strict";
// var modalControl = (function () {

//     var showModal = function (event) {
//         modals.forEach(function (modal) {
//             modal.classList.remove("show");
//        });
//         document.querySelector("#modal-overlay").classList.add("show");

//         if (typeof event === "string") {
//             return document.getElementById(event).classList.add('show')
//         }
//         event.preventDefault();

//         var modalID = event.target.getAttribute('href');
//         document.querySelector(modalID).classList.add('show')
//     };

//     var modalLinks = document.querySelectorAll(".show-modal");

//     for (var i = 0; i < modalLinks.length; i++) {
//         modalLinks[i].addEventListener("click", showModal);
//     }

//     var hideModal = function (event) {
//         event.preventDefault();
//         document.querySelector("#modal-overlay").classList.remove("show");
//     };

//     var closeButtons = document.querySelectorAll(".modal .close");

//     for (var i = 0; i < closeButtons.length; i++) {
//         closeButtons[i].addEventListener("click", hideModal);
//     }

//     document
//         .querySelector("#modal-overlay")
//         .addEventListener("click", hideModal);

//     var modals = document.querySelectorAll(".modal");

//     for (var i = 0; i < modals.length; i++) {
//         modals[i].addEventListener("click", function (event) {
//             event.stopPropagation();
//         });
// 	}
// })();