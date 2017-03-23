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

// Since I was not able to update the free MongoDB version hosted by heroku I had to use aggregate instead of addFields
export const filter = (req, res, next) =>
  Poi.aggregate({
    $project : {
     dmax: { $literal: parseFloat(req.query.dmax) || 0 },
     distance: {
           $sqrt: {
               $add: [
                  { $pow: [ { $subtract: [ "$y", parseFloat(req.query.y) || 0 ] }, 2 ] },
                  { $pow: [ { $subtract: [ "$x", parseFloat(req.query.x) || 0 ] }, 2 ] }
               ]
           }
        },
     name: "$name",
     x: "$x",
     y: "$y",
     createdAt: "$createdAt",
     updatedAt: "$updatedAt",
    }
  }).then(function(pois) {
    let filtered = []
    for (let i = pois.length - 1; i >= 0; i--) {
      if (pois[i].distance <= pois[i].dmax)
        filtered.push(pois[i])

      delete pois[i].distance;
      delete pois[i].dmax;
    }
    return filtered
  })
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