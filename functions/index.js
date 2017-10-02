(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(1);
const admin = __webpack_require__(3);
let _cors = __webpack_require__(4);
// admin.initializeApp(functions.config().firebase);
var cors = _cors({ origin: true });
// const ref = admin.database().ref();
// var obj = {
//     name:'',
//     email: '',
// }
exports.createUser = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        //  obj.name =  req.body.name;
        //obj.email = req.body.email;
        console.log("reeeqqqqq hittt", req);
        //  function userCreate(){
        admin.auth().createUser({
            email: req.body.email,
            emailVerified: false,
            // phoneNumber: "+11234567592",
            password: req.body.password,
            displayName: req.body.name,
            photoURL: "https://s3.amazonaws.com/FringeBucket/default-user.png",
            disabled: false
        })
            .then(function (userRecord) {
            // console.log("reqqqqq", req.body);
            // this.createUserData();
            // See the UserRecord reference doc for the contents of userRecord.
            console.log("Successfully created new user:", userRecord);
        })
            .catch(function (error) {
            console.log("Error creating new user:", error);
        });
        // }
        //createuser(request,Response);
        // createUserData(){
        // console.log("req in database =>",req.body);
        // functions.auth.user().onCreate(event =>{
        //     console.log("createUserData" , event.data);
        //     console.log("req in database =>",req.body);
        //     const uid = event.data.uid;
        //     const email = event.data.email;
        //     // console.log("reqqqqq", req.body);
        //     const photoURL = event.data.photoURL || 
        //     'https://s3.amazonaws.com/FringeBucket/default-user.png'
        //     const newUserRef = ref.child(`/user/${uid}`);
        //     return newUserRef.set({
        //         photoURL: photoURL,
        //         email: 'by@by.com',
        //         name: 'hammad'
        //     })
        // });
        // }
        console.log("Mail Successfully Sent!");
        res.send("Mail Successfully Sent!");
    });
});
exports.addUser = functions.auth.user().onCreate(event => {
    console.log("user createee event", event.data);
    const uid = event.data.uid;
    const name = event.data.displayName;
    const email = event.data.email;
    const photoURL = event.data.photoURL ||
        'https://s3.amazonaws.com/FringeBucket/default-user.png';
    const newUserRef = ref.child(`/user/${uid}`);
    return newUserRef.set({
        photoURL: photoURL,
        email: email,
        name: name
    });
});
// function createuser(request:any,Response:any){
//     admin.auth().createUser({
//         email: request.body.email,
//         emailVerified: false,
//         phoneNumber: "+11234567592",
//         password: request.body.password,
//         displayName: request.body.name,
//         photoURL: "https://s3.amazonaws.com/FringeBucket/default-user.png",
//         disabled: false
//     })
//         .then(function (userRecord) {
//             console.log("reqqqqq",request.body);
//             // See the UserRecord reference doc for the contents of userRecord.
//             console.log("Successfully created new user:", userRecord);
//         })
//         .catch(function (error) {
//             console.log("Error creating new user:", error);
//         });
// } 


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("firebase-functions");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const createUser_1 = __webpack_require__(0);
exports.createUser = createUser_1.createUser;
const createUser_2 = __webpack_require__(0);
exports.addUser = createUser_2.addUser;
const apiaiWebhook_1 = __webpack_require__(5);
exports.apiaiWebhook = apiaiWebhook_1.apiaiWebhook;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(1);
exports.apiaiWebhook = functions.https.onRequest((req, res) => {
    console.log("webhook api");
    // switch(req.body.result.action){
    //     case 'GPA':
    //     console.log("run in switch condition 10 ");
    // }
    if (req.body.result.action == 'GPA') {
        console.log("run function in if gpa action");
        if (req.body.result.parameters.number) {
            console.log("marks and number");
            console.log(req.body.result.parameters.number);
            console.log(req.body.result.parameters.marks.length);
            // for(var i=0; i<req.body.parameters.marks.length; i++){
            //     res.send({
            //         speech: `enter subject ${i} marks is  `
            //     })
            // }
        }
        else {
            res.send({
                speech: ` how many subjects do you have`
            });
        }
    }
});


/***/ })
/******/ ])));