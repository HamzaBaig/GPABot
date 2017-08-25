import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import db from '../db'

export const apiaiWebhook = functions.https.onRequest((req, res) => {

    db.ref('/orders')
        .push(req.body.result.parameters)
        .then(snapshot => {
            res.send({
                speech: "from server - I have forwarded your order of hotel booking to our system admin, from $check-in to $check-out in $destination"
            });
        });
});