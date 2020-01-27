const {
  SpraypaintBase,
  attr,
  belongsTo,
  hasMany
  // etc
} = require("spraypaint/dist/spraypaint")

import fetch from 'isomorphic-fetch'

const ApplicationRecord = SpraypaintBase.extend({
  static: {
    baseUrl: process.env.API_URL,
    apiNamespace: "/api/v1"
  }
})

const Recipe = ApplicationRecord.extend({
  static: {
    jsonapiType: "recipes"
  },
  attr: {
    title: attr(),
    description: attr(),
    category: attr(),
    rating: attr(),
    category: attr()
  }
})

const test = async () => {
  const res = await Recipe.all()
  console.log(res)
}

test()
