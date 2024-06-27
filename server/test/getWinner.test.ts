import request from 'supertest';
import app from '../src/app'; // Adjust the import path to where your Express app is initialized
import { Card } from '../src/types/card';

const hand1: Card[] = [
  { rank: 'a', suit: 's' },
  { rank: 'k', suit: 's' },
  { rank: 'q', suit: 's' },
  { rank: 'j', suit: 's' },
  { rank: 't', suit: 's' },
];

const hand2: Card[] = [
  { rank: '2', suit: 'h' },
  { rank: '3', suit: 'h' },
  { rank: '4', suit: 'h' },
  { rank: '5', suit: 'h' },
  { rank: '6', suit: 'h' },
];

const hand3: Card[] = [
  { rank: '2', suit: 'k' },
  { rank: '2', suit: 'r' },
  { rank: '2', suit: 'h' },
  { rank: '2', suit: 's' },
  { rank: '3', suit: 'h' },
];

const hand4: Card[] = [
  { rank: '3', suit: 'k' },
  { rank: '4', suit: 'k' },
  { rank: '5', suit: 'k' },
  { rank: '6', suit: 'k' },
  { rank: '7', suit: 'k' },
];

describe('POST /api/v1/getWinner', () => {
  it('should return 400 for invalid body type', async () => {
    const response = await request(app)
      .post('/api/v1/getWinner') // Adjust the route if necessary
      .send({ not: 'a valid body' }); // Example of invalid input

    expect(response.status).toBe(400);
    expect(response.text).toBe('Invalid body type');
  });

  it('should return 200 and the winning hand for valid input', async () => {
    const validInput = [hand1, hand2, hand3, hand4]; // Example of valid input
    const response = await request(app).post('/api/v1/getWinner').send(validInput);

    expect(response.status).toBe(200);

    const expected = {
      winningHandIndex: 0,
      winningHand: [
        { rank: 'a', suit: 's' },
        { rank: 'k', suit: 's' },
        { rank: 'q', suit: 's' },
        { rank: 'j', suit: 's' },
        { rank: 't', suit: 's' },
      ],
      result: 'Straight Flush',
    };
    console.log(response.body);
    expect(response.body).toEqual(expected);
  });
});
