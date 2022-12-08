function checkSeatStatus(str1, num){
    if (typeof str1 !== 'string'){
        throw new TypeError('First parameter is not a string')
    }

    if (typeof num !== 'number'){
        throw new TypeError('Second parameter is not a number')
    }
}



const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
];

return layout[getRowNumber(str1)][num].booked

function getRowNumber(letter){
    arr = [0, 1, 2, 3]
    return arr.indexOf(letter)
}






module.exports = {checkSeatStatus, getRowNumber}