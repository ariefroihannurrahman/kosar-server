/* eslint linebreak-style: ["error", "windows"] */
import {home, getEmployee, getReporting} from '../src/handlers.js';
import connection from '../src/database.js';

// test('it should return Hello World', ()=>{
//   const text = 'Hello World';
//   expect(home).toEqual(text);
// });

// test('it should return data employee', ()=>{
//   expect(getEmployee).toBe(Object);
// });

// test('it should return data reporting', ()=>{
//   expect(getReporting).toBe(Object);
// });

describe('Test database connection', () => {
  test('Connection is successful', (done) => {
    connection.on('connect', () => {
      jest.setTimeout(20000);
      expect(connection.state).toEqual('connected');
      done();
    });
  });
});

describe('Test home function', () => {
  test('Return "Hello World"', () => {
    const mockRequest = {};
    const mockReply = {
      response:
        jest
            .fn()
            .mockReturnValue('Hello World'),
    };

    const expectedOutput = 'Hello World';
    const result = home(mockRequest, mockReply);

    expect(mockReply.response)
        .toHaveBeenCalledWith(expectedOutput);

    expect(result)
        .toEqual(expectedOutput);
  });
});

describe('getEmployee()', () => {
  test(
      'should resolve with status, code, and data on successful query',
      async () => {
        const result = await getEmployee();
        expect(result.status).toBe('Success');
        expect(result.code).toBe(200);
        expect(Array.isArray(result.data)).toBe(true);
      });
});

describe('getReporting()', () => {
  afterAll(()=>{
    connection.end();
  });
  test(
      'should resolve with status, code, and data on successful query',
      async () => {
        const result = await getReporting();
        expect(result.status).toBe('Success');
        expect(result.code).toBe(200);
        expect(Array.isArray(result.data)).toBe(true);
      });
});
