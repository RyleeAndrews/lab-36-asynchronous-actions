'use strict';

const superagent = require('superagent');
const server = require('../../index.js');

process.env.MONGODB_URL || 'mongodb://localhost:27017/36Lab';
const mongoose = require('mongoose');
const Sushi = require('../../models/sushiSchema.js');


test('get route for all objects', () => {
  return superagent.get('http://localhost:3000/api/Sushi')
    .then( res => {
      expect(res.status).toBe(200);
    });
});

test('get route for a single object', () => {
  return superagent.get('http://localhost:3000/api/Sushi/5a6bcecdf2d30941680800d2')
    .then( res => {
      expect(res.body.task).toBe('hi');
      expect(res.body.description).toBe('k');
    });
});

test('post route', () => {
  return superagent.post('http://localhost:3000/api/Sushi')
    .send({task: 'groceries', description: 'food'})
    .then( res => {
      expect(res.body.task).toBe('groceries');
      expect(res.body.description).toBe('food');
    });
});

test('put route', () => {
  return superagent.put('http://localhost:3000/api/Sushi/5a6aa76b427a7c3b0c2a5aa2')
    .send({task: 'car', description: 'oil'})
    .then( res => {
      expect(res.body.task).toBe('car');
      expect(res.body.description).toBe('oil');
    });
});

test('delete route', () => {
  return superagent.delete('http://localhost:3000/api/Sushi/5a6be32f39f40d42f1b81ef7')
    .then( res => {
      expect(res.body.task).toBe(undefined);
      expect(res.body.description).toBe(undefined);
      expect(res.body.categoryID).toBe(undefined);
    });
});
