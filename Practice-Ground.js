function findAddress(obj) {
    let objectName =[

    'street',
    'house',
    'society'];

     let address = '';

    for (let i = 0; i < objectName.length; i++) {

          let spaceDes = objectName[i];

         address = address + (obj[spaceDes] || '__');
        if (i !== objectName.length - 1) {
            address = address + ',';
        }
    }

     return address;
}

// Test cases
console.log(findAddress({street: 10, house: '15A', society: 'Earth Perfect'})); // Output: 10,15A,Earth Perfect
console.log(findAddress({house:'12a', society: 'Earth Perfect'})); // Output: 10,__,Earth Perfect
console.log(findAddress({street: 10})); // Output: 10,__,__
