import { FETCH_DOCTOR, FETCH_PATIENT_SINGLE } from "./actionType";

import firestore from '@react-native-firebase/firestore';

export const fetchDataDoctor = () => {
    return async dispatch => {
      let list = [];
      await firestore()
        .collection('Doctors')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const {about, email, experience, fees, id, image, mobile, name, rating, specialization} = doc.data();
            list.push({
              about: about,
              email: email,
              experience: experience,
              id: id,
              fee: fees,
              image: image,
              mobile: mobile,
              name: name,
              rating:rating,
              specialization: specialization
            });
          });
          if (list) {
            
            dispatch({
              type: FETCH_DOCTOR,
              payload: list,
            });
          } else {
            console.log('unable to fetch');
          }
        })
  
        .catch(error => {
          console.log(error);
        });
    };
  };
  

  export const fetchSinglePatient = (userEmail) => {
    return async dispatch => {
      let list = "";
      await firestore()
        .collection('Doctors')
        .where('email', '==', userEmail)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const {about, email, experience, fees, id, image, mobile, name, rating, specialization} = doc.data();
            list={
              about: about,
              email: email,
              experience: experience,
              id: id,
              fees: fees,
              image: image,
              mobile: mobile,
              name: name,
              rating:rating,
              specialization: specialization
            };
          });
          if (list) {
            
            dispatch({
              type: FETCH_PATIENT_SINGLE,
              payload: list,
            });
          } else {
            console.log('unable to fetch');
          }
        })
  
        .catch(error => {
          console.log(error);
        });
    };
  };



  
//   export const fetchSinglePatient = async (userEmail) => 
//   {
//     console.log("email", userEmail)
//     return async dispatch => {
//     try {
//         console.log("email1", userEmail)
//       let userdata = '';
//       await firestore()
//       .collection('Doctors')
     
//       .where('email', '==', userEmail)
//       .get()
//       .then(querySnapshot => {
      
//           querySnapshot.forEach(doc => {
//             const {
//               about,
//               email,
//               id,
//               image,
//               experience,
//               fees,
//               mobile,
//               name,
//               rating,
//               specialization
//             } = doc.data();
//             userdata={
//               about: about,
//               email: email,
//               experience: experience,
            
//               image: image,
//               fee: fees,
//               mobile: mobile,
//               id: id,
//               rating: rating,
//               name:name,
//               specialization:specialization
//             };
            
//           });
          
          
//         });
//         if (userdata) {
//             console.log('reduceruserPatient', userdata)
//             dispatch({
//               type: FETCH_PATIENT_SINGLE,
//               payload: userdata,
//             });
//           } else {
//             console.log('unable to fetch');
//           }
        

      
      
     
      
//     } catch (error) {
//       console.log(error);
//     }
// }
//   };