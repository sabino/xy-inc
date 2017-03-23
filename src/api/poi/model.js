import mongoose, { Schema } from 'mongoose'

const validator = [
    { validator: Number.isInteger, message: '{VALUE} is not an integer value' }
];

const poiSchema = new Schema({
    name: {
        type: String
    },
    x: {
        type: Number,
        validate: validator
    },
    y: {
        type: Number,
        validate: validator
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