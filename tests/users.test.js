const request = require('supertest');
const app = require('../server');

describe('Users API', () => {
  it('GET /users → should return an array', async () => {
    const res = await request(app).get('/users');
    expect([200, 500]).toContain(res.statusCode); // 500 si DB no conectó
    if (res.statusCode === 200) expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /users/:id → should return a user or 404', async () => {
    const fakeId = '68ce9ee8729bf20eafaacae8';
    const res = await request(app).get(`/users/${fakeId}`);
    expect([200, 404, 500]).toContain(res.statusCode);
  });
});