'use strict' 

const {checkSeatStatus, getRowNumber} = require('../homework');

it('checkSeatStatus is a function',()=>{
    expect(typeof checkSeatStatus).toBe('function')
})

it('should throw a TypeError if first parameter is not a string',()=>{
    expect(()=>checkSeatStatus(3)).toThrow(new TypeError('First parameter is not a string'))
})

it('should throw a TypeError if second parameter is not a number',()=>{
    expect(()=>checkSeatStatus('str', 'str')).toThrow(new TypeError('Second parameter is not a number'))
})

it('should return 0 if the letter given is an A',()=>{
    expect(getRowNumber('A')).toBe(0)
})

it('should return true if the given seat defined by row and column is booked', () =>{
    expect(checkSeatStatus('A', 1)).toBe(0)
})

it('should return true if the given seat defined by row and column is booked', () =>{
    expect(checkSeatStatus('E', 3)).toBe(0)
})
