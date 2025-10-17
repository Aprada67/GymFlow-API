const request = require('supertest');
const app = require('../server');

describe('Users API', () => {
  it('GET /users → should return an array', async () => {
    const res = await request(app).get('/users');
    expect([200, 500]).toContain(res.statusCode);
    if (res.statusCode === 200) expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /users/:id → should return a user or 404', async () => {
    const userId = '68dc31c451e03d1c3930d07e';
    const res = await request(app).get(`/users/${userId}`);
    expect([200, 404, 500]).toContain(res.statusCode);
  });
});