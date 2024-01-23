const request = require('supertest');

const app = require('../src/app');

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'API - 👋🌎🌍🌏'
      }, done);
  });
});

describe('GET /api/v1/emojis', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1/emojis')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, ['😀', '😳', '🙄'], done);
  });
});

describe('Endpoint /api/v1/tasks', () => {
  it('should respond with 200 when called with GET request', (done) => {
    request(app)
      .get('/api/v1/tasks')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('Endpoint /api/v1/tasks', () => {
  it('should return a list of tasks when called with GET', (done) => {
    request(app)
      .get('/api/v1/tasks')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('Endpoint /api/v1/tasks', () => {
  it('should return the tasks when called with GET id', (done) => {

   const expected = {
     id: '1',
     name: 'Hit the gym',
     done: false 
   };
   request(app)
     .get('/api/v1/tasks/1')
     .set('Accept', 'application/json')
     .expect('Content-Type', /json/)
     .expect(200, expected, done);
   });
});


describe('Endpoint /api/v1/tasks', () => {
  it('should return 201 when new todo was added', async () => {
    await request(app)
      .post('/api/v1/tasks/')
      .set('Accept', 'application/json')
      .send({ id: '4', name: 'Buy groceries' })
      .expect('Content-Type', /json/)
      .expect(201, { message: 'Created' });
    // Check that it was actually added as well
    const expected = {
      id: '4',
      name: "Buy groceries",
    };
    await request(app)
      .get('/api/v1/tasks/4')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, expected);
  });
});

describe('Endpoint /api/v1/tasks', () => {
  it('should return 200 when todo was updated', async () => {
    await request(app)
      .patch('/api/v1/tasks/4')
      .set('Accept', 'application/json')
      .send({ name: 'Buy new Lamborghini' })
      .expect('Content-Type', /json/)
      .expect(200, { message: 'Updated' });
    // Check that it was actually added as well
    const expected = {
      id: '4',
      name: 'Buy new Lamborghini'
    };
    await request(app)
      .get('/api/v1/tasks/4')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, expected);
  });
});

describe('Endpoint /api/v1/tasks', () => {
  it('should return 200 when todo was deleted', async () => {
    await request(app)
      .delete('/api/v1/tasks/4')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { message: 'Deleted' });
    await request(app)
      .get('/api/v1/tasks/4')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, { message: 'Not found' });
  });
});