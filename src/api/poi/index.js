import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, filter, show, update, destroy } from './controller'
import { schema } from './model'
export Poi, { schema } from './model'

const router = new Router()
const { name, x, y } = schema.tree

/**
 * @api {post} /poi Create POI
 * @apiName CreatePoi
 * @apiGroup POI
 * @apiParam name POI's name.
 * @apiParam x POI's x position.
 * @apiParam y POI's y position.
 * @apiSuccess {Object} poi Poi's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Poi not found.
 */
router.post('/',
  body({ name, x, y }),
  create)

/**
 * @api {get} /poi Retrieve POIs
 * @apiName RetrievePois
 * @apiGroup POI
 * @apiUse listParams
 * @apiSuccess {Object[]} pois List of pois.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /filter?dmax=0&x=0&y=0 Retrieve based on Max Distance
 * @apiName RetrieveWithMaxDistance
 * @apiGroup POI
 * @apiParam dmax POI's Max Distance.
 * @apiParam x POI's x position.
 * @apiParam y POI's y position.
 * @apiSuccess {Object[]} pois List of pois.
 */
router.get('/filter',
  filter)

/**
 * @api {get} /poi/:id Retrieve POI
 * @apiName RetrievePoi
 * @apiGroup POI
 * @apiSuccess {Object} poi Poi's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Poi not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /poi/:id Update POI
 * @apiName UpdatePoi
 * @apiGroup POI
 * @apiParam name POI's name.
 * @apiParam x POI's x position.
 * @apiParam y POI's y position.
 * @apiSuccess {Object} poi POI's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 POI not found.
 */
router.put('/:id',
  body({ name, x, y }),
  update)

/**
 * @api {delete} /poi/:id Delete POI
 * @apiName DeletePoi
 * @apiGroup POI
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 POI not found.
 */
router.delete('/:id',
  destroy)


export default router
