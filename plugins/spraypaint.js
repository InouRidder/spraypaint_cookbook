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
