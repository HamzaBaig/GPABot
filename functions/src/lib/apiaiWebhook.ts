import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import db from '../db'


export const apiaiWebhook = functions.https.onRequest((req,res)=>{
    console.log("webhook api");
    // switch(req.body.result.action){
    //     case 'GPA':
    //     console.log("run in switch condition 10 ");
    // }
    
    if(req.body.result.action == 'GPA'){
        console.log("run function in if gpa action");
        if(req.body.result.parameters.number){
            console.log("marks and number");
            console.log(req.body.result.parameters.number);
            console.log(req.body.result.parameters.marks.length);
            // for(var i=0; i<req.body.parameters.marks.length; i++){
            //     res.send({
            //         speech: `enter subject ${i} marks is  `
            //     })
            // }
        }
        else{
            res.send({
                speech: ` how many subjects do you have`
            })
        }
    }
});