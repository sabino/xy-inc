import { Poi } from '.'

let poi

beforeEach(async () => {
  poi = await Poi.create({ name: 'test', x: 'test', y: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = poi.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(poi.id)
    expect(view.name).toBe(poi.name)
    expect(view.x).toBe(poi.x)
    expect(view.y).toBe(poi.y)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = poi.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(poi.id)
    expect(view.name).toBe(poi.name)
    expect(view.x).toBe(poi.x)
    expect(view.y).toBe(poi.y)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
