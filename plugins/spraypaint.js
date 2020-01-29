// import { SpraypaintBase, Model, Attr, HasMany, BelongsTo } from "spraypaint"
// import 'isomorphic-fetch'

// @Model()
// class ApplicationRecord extends SpraypaintBase {
//   static baseUrl = process.env.API_URL
//   static apiNamespace = "/api/v1"

//   updateAttributes(attributes) {
//     Object.keys(attributes).forEach(attribute => {
//       this[attribute] = attributes[attribute]
//     })
//     return true;
//   }
// }

// @Model()
// class Category extends ApplicationRecord {
//   static jsonapiType = "categories"

//   @Attr() name: string
//   @HasMany() recipes: Recipe[]

// }

// @Model()
// class Recipe extends ApplicationRecord {
//   static jsonapiType = "recipes"

//   @Attr() title: string
//   @Attr() description: string
//   @Attr() rating: number

//   @BelongsTo() category: Category[]

// }

const {
  SpraypaintBase,
  attr,
  belongsTo,
  hasMany
  // etc
} = require("spraypaint/dist/spraypaint")

import 'isomorphic-fetch'

const ApplicationRecord = SpraypaintBase.extend({
  static: {
    baseUrl: process.env.API_URL,
    apiNamespace: "/api/v1"
  },

  methods: {
    updateAttributes(attributes) {
      Object.keys(attributes).forEach(attribute => {
        this[attribute] = attributes[attribute]
      })
      return true;
    }
  }
})

const Category = ApplicationRecord.extend({
  static: {
    jsonapiType: "categories"
  },

  attrs: {
    name: attr(),
    recipes: hasMany()
  }
})

const Recipe = ApplicationRecord.extend({
  static: {
    jsonapiType: "recipes"
  },

  attrs: {
    title: attr(),
    description: attr(),
    rating: attr(),
    category: belongsTo()
  }
})

// // This is probably not the right way to do things.
global.Recipe = Recipe
global.Category = Category
