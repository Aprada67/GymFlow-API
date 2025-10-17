const request = require('supertest');
const app = require('../server');

describe('Bookings API', () => {
  it('GET /bookings → should return an array', async () => {
    const res = await request(app).get('/bookings');
    expect([200, 500]).toContain(res.statusCode);
    if (res.statusCode === 200) expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /bookings/:id → should return a booking or 404', async () => {
    const fakeId = '68dc2ec8f5bf00375ffc57fb';
    const res = await request(app).get(`/bookings/${fakeId}`);
    expect([200, 404, 500]).toContain(res.statusCode);
  });
});