import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyCWe1CgZUCv4NGU7m2PRSQit_sTCoQKG8w",
   authDomain: "projectmdjm.firebaseapp.com",
   databaseURL: "https://projectmdjm.firebaseio.com",
   projectId: "projectmdjm",
   storageBucket: "projectmdjm.appspot.com",
   messagingSenderId: "298237522407"
 };

firebase.initializeApp(config);
// let aaa=[];

 // const database = firebase.database();
 // database.ref('registered').push({
 //    username: 'Milojko Pantic',
 //    email: 'mixy80@gmail.com',
 //    password: 'mmmmmmmm'
 //
 // });

// const database = firebase.database();
//  database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   // aaa.push(val);
//   console.log( `${val.name} is from ${val.location.city} ${val.location.country}`);
//    // console.log(snapshot.val());
// })

// const database = firebase.database();
// database.ref()
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//    console.log(val.name,'is from', val.location.city, val.location.country);
//  })
//  .catch((e) => {
//    console.log('This failed', e);
//
//  })

// database.ref().set({
//    name: 'Milos Zivanovic',
//    projectname: 'todoapp',
//    location: {
//      city: 'Belgrade',
//      country: 'Serbia'
//    },
//    opa: 'opaaaaa'
//  }).then(() => {()
//    console.log('Data is saved');
//  }).catch((e) => {
//    console.log('This failed', e);
//
//  })

 // database.ref('opa').set('opaopa');
 // database.ref('location/city').set('Znik');

//  database.ref('attributes').set({
//    height: '2.10m',
//    weight: '120kg'
//  }).then(() => {
//    console.log('Second set call worked');
//  }).catch((e) => {
//    console.log('Things failed for second', e);
//  });
//
// database.ref('opa').remove().then(() =>{
//    console.log('Data removed');
// }).catch((e) => {
//    console.log('Didnt remove data', e);
// });
 export default firebase;
