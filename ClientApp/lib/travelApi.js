import restler from 'restler';
import axios from 'axios'

export default class SearchResults {
    static fetchResults(destination, interest) {
        return new Promise(
            (resolve, reject) => {
                axios.get(`http://tour-pedia.org/api/getPlaces?location=${destination}&category=${interest}&source=GooglePlaces`).then(response => {
                    console.log(response)
                }).catch(error => {
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