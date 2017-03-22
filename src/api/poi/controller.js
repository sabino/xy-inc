import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Poi } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Poi.create(body)
    .then((poi) => poi.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Poi.find(query, select, cursor)
    .then((pois) => pois.map((poi) => poi.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Poi.findById(params.id)
    .then(notFound(res))
    .then((poi) => poi ? poi.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Poi.findById(params.id)
    .then(notFound(res))
    .then((poi) => poi ? _.merge(poi, body).save() : null)
    .then((poi) => poi ? poi.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Poi.findById(params.id)
    .then(notFound(res))
    .then((poi) => poi ? poi.remove() : null)
    .then(success(res, 204))
    .catch(next)
