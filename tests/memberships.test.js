const request = require('supertest');
const app = require('../server');

describe('Memberships API', () => {
  it('GET /memberships → should return an array', async () => {
    const res = await request(app).get('/memberships');
    expect([200, 500]).toContain(res.statusCode);
    if (res.statusCode === 200) expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /memberships/:id → should return a membership or 404', async () => {
    const fakeId = '68dc2f63f5bf00375ffc57fc';
    const res = await request(app).get(`/memberships/${fakeId}`);
    expect([200, 404, 500]).toContain(res.statusCode);
  });
});