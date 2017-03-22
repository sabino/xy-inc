import mongoose, { Schema } from 'mongoose'

const poiSchema = new Schema({
  name: {
    type: String
  },
  x: {
    type: String
  },
  y: {
    type: String
  }
}, {
  timestamps: true
})

poiSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      x: this.x,
      y: this.y,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Poi', poiSchema)

export const schema = model.schema
export default model
