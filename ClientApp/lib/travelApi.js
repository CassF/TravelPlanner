import restler from 'restler';
import axios from 'axios'
import restler from 'restler'
import cors from 'cors'

export default class SearchResults {
    static fetchResults(destination, interest) {
        // return new Promise(
        //     (resolve, reject) => {
        //         axios.get(`http://tour-pedia.org/api/getPlaces?location=${destination}&category=${interest}&source=Facebook`, cors()).then(response => {
        //             console.log(response)
        //             resolve(response)
        //         }).catch(error => {
        //             reject(erro)
        //             console.log(error)
        //         })
        //     }
        // )
        // return new Promise(
        //     (resolve, reject) => {
        //         restler.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${interest}+in+${destination}&key=AIzaSyDKbIAgG4tiJlIa1TZ4MEQ_MvnuIwcY2-U`, headers = { 'Access-Control-Allow-Origin': '*' }).on('complete', function (result) {
        //             if (result instanceof Error) {
        //                 console.log('Error:', result.message);
        //                 reject(result);
        //             } else {
        //                 console.log("done");
        //                 resolve(result);
        //             }
        //         });
        //     }
        // )
        return new Promise(
            (resolve, reject) => {
                axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${interest}+in+${destination}&key=AIzaSyDKbIAgG4tiJlIa1TZ4MEQ_MvnuIwcY2-U`, {mode: 'no cors'}).then(response => {
                resolve(response)    
                console.log(response)
                }).catch(error => {
                    reject(error)
                    console.log(error)
                })
            }
        )
    }
}

// static fetchResults(destination, interest) {
//     return new Promise(
//         (resolve, reject) => {
//             axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${interest}+in+${destination}&key=AIzaSyDKbIAgG4tiJlIa1TZ4MEQ_MvnuIwcY2-U`, cors()).then(response => {
//                 console.log(response)
//             }).catch(error => {
//                 console.log(error)
//             })
//         }
//     )
// }

// static fetchResults(destination, interest) {
//     return new Promise(
//         (resolve, reject) => {
//             axios.get(`http://tour-pedia.org/api/getPlaces?location=${destination}&category=${interest}&source=GooglePlaces`).then(response => {
//                 console.log(response)
//             }).catch(error => {
//                 console.log(error)
//             })
//         }
//     )
// }