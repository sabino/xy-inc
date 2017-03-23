import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, filter, show, update, destroy } from './controller'
import { schema } from './model'
export Poi, { schema } from './model'

const router = new Router()
const { name, x, y } = schema.tree

/**
 * @api {post} /poi Create poi
 * @apiName CreatePoi
 * @apiGroup Poi
 * @apiParam name Poi's name.
 * @apiParam x Poi's x.
 * @apiParam y Poi's y.
 * @apiSuccess {Object} poi Poi's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Poi not found.
 */
router.post('/',
  body({ name, x, y }),
  create)

/**
 * @api {get} /poi Retrieve pois
 * @apiName RetrievePois
 * @apiGroup Poi
 * @apiUse listParams
 * @apiSuccess {Object[]} pois List of pois.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /filter?dmax=&x=&y= Retrieve Points Of Interest based on max distance
 * @apiName RetrieveWithMaxDistance
 * @apiGroup Poi
 * @apiParam x Poi's x.
 * @apiParam y Poi's y.
 * @apiSuccess {Object[]} pois List of pois.
 */
router.get('/filter',
  filter)

/**
 * @api {get} /poi/:id Retrieve poi
 * @apiName RetrievePoi
 * @apiGroup Poi
 * @apiSuccess {Object} poi Poi's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Poi not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /poi/:id Update poi
 * @apiName UpdatePoi
 * @apiGroup Poi
 * @apiParam name Poi's name.
 * @apiParam x Poi's x.
 * @apiParam y Poi's y.
 * @apiSuccess {Object} poi Poi's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Poi not found.
 */
router.put('/:id',
  body({ name, x, y }),
  update)

/**
 * @api {delete} /poi/:id Delete poi
 * @apiName DeletePoi
 * @apiGroup Poi
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Poi not found.
 */
router.delete('/:id',
  destroy)

export default router
