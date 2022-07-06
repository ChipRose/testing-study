const square = require('./squre');

describe('square', () =>{
  text('Корректное значение',()=>{
    expect(square(2).toBeLessThan(5));
    expect(square(2).toBeGreaterThan(3));
  });
});