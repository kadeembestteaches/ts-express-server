import request from 'supertest';
import app from '../app'; // Adjust the import path as necessary

describe('User Routes', function() {
  describe('GET /users', function() {
    it('should return a list of users', async function() {
      const response = await request(app).get('/users');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        users: [
          {
            firstName: 'Jon',
            lastName: 'Snow'
          }
        ]
      });
    });
  });

  describe('GET /users/:id', function() {
    it('should return a single user', async function() {
      const response = await request(app).get('/users/1');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        user: {
          firstName: 'Jon',
          lastName: 'Snow'
        }
      });
    });
  });
});
