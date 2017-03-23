import mongoose, { Schema } from 'mongoose'

const poiSchema = new Schema({
  name: {
    type: String
  },
  x: {
    type: Number
  },
  y: {
    type: Number
  }
}, {
  timestamps: true
})

poiSchema.methods.view = function (full) {
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
    } : view
  }

const model = mongoose.model('Poi', poiSchema)

export const schema = model.schema
export default model