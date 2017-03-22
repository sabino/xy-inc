import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Poi } from '.'

const app = () => express(routes)

let poi

beforeEach(async () => {
  poi = await Poi.create({})
})

test('POST /poi 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ name: 'test', x: 'test', y: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.x).toEqual('test')
  expect(body.y).toEqual('test')
})

test('GET /poi 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /poi/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${poi.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(poi.id)
})

test('GET /poi/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /poi/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${poi.id}`)
    .send({ name: 'test', x: 'test', y: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(poi.id)
  expect(body.name).toEqual('test')
  expect(body.x).toEqual('test')
  expect(body.y).toEqual('test')
})

test('PUT /poi/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ name: 'test', x: 'test', y: 'test' })
  expect(status).toBe(404)
})

test('DELETE /poi/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${poi.id}`)
  expect(status).toBe(204)
})

test('DELETE /poi/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
