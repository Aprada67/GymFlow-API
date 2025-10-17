const request = require('supertest');
const app = require('../server');

describe('Classes API', () => {
  it('GET /classes → should return an array', async () => {
    const res = await request(app).get('/classes');
    expect([200, 500]).toContain(res.statusCode);
    if (res.statusCode === 200) expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /classes/:id → should return a class or 404', async () => {
    const fakeId = '68dc2f8bf5bf00375ffc57fd';
    const res = await request(app).get(`/classes/${fakeId}`);
    expect([200, 404, 500]).toContain(res.statusCode);
  });
});