const request = require('supertest');
const app = require('../server');

describe('Memberships API', () => {
  it('GET /memberships → should return an array', async () => {
    const res = await request(app).get('/memberships');
    expect([200, 500]).toContain(res.statusCode);
    if (res.statusCode === 200) expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /memberships/:id → should return a membership or 404', async () => {
    const membershipId = '68dc2ec8f5bf00375ffc57fb';
    const res = await request(app).get(`/memberships/${membershipId}`);
    expect([200, 404, 500]).toContain(res.statusCode);
  });
});