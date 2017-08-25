import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import db from '../db'

export const apiaiWebhook = functions.https.onRequest((req, res) => {

    let order = req.body.result.parameters;

    db.ref('/orders')
        .push(order)
        .then(snapshot => {
            res.send({
                speech: `${order.name} I have forwarded your order of hotel booking
                to our system, from ${order.checkIn} to ${order.checkOut}
                in ${order.destination}`
            });
        });
});