import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
        },
        username: {
            type: String,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            trim: true,
            minlength: [8, 'The password must be 8 characters or more'],
            private: true,
        },
        provider_id: {
            type: String,
        },
        provider: {
            type: String,
            default: 'email',
        },
    },
    {
        timestamps: true,
    }
)

const toJSON = (schema) => {
    let transform;
    if (schema.options.toJSON && schema.options.toJSON.transform) {
      transform = schema.options.toJSON.transform;
    }
  
    schema.options.toJSON = Object.assign(schema.options.toJSON || {}, {
      transform(doc, ret, options) {
        Object.keys(schema.paths).forEach((path) => {
          if (schema.paths[path].options && schema.paths[path].options.private) {
            deleteAtPath(ret, path.split('.'), 0);
          }
        });
  
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
        if (transform) {
          return transform(doc, ret, options);
        }
      },
    });
  };

  userSchema.plugin(toJSON);


  export default mongoose.models.User ||  mongoose.model('User', userSchema)
