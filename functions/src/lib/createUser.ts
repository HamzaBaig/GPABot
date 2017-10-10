 import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { Request, Response } from "express";
let _cors = require('cors');
// admin.initializeApp(functions.config().firebase);

var cors = _cors({ origin: true });

// const ref = admin.database().ref();
// var obj = {
//     name:'',
//     email: '',
// }


export const createUser = functions.https.onRequest((req: Request, res: Response) => {

    cors(req, res, () => {
      //  obj.name =  req.body.name;
        //obj.email = req.body.email;
         console.log("reeeqqqqq hittt",req);

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
        console.log("Mail Successfully Sent!")
        res.send("Mail Successfully Sent!");
        
    });

    

})
 

export const addUser = functions.auth.user().onCreate(event =>{
    console.log("user createee event" , event.data);
    const uid = event.data.uid;
    const name = event.data.displayName;
    const email = event.data.email;
    const photoURL = event.data.photoURL || 
    'https://s3.amazonaws.com/FringeBucket/default-user.png'
    const newUserRef = ref.child(`/user/${uid}`);
    return newUserRef.set({
        photoURL: photoURL,
        email: email,
        name: name
    })
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