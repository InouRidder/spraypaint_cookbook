import { SpraypaintBase, Model, Attr, HasMany, BelongsTo } from "spraypaint"
import 'isomorphic-fetch'

@Model()
class ApplicationRecord extends SpraypaintBase {
  static baseUrl = process.env.API_URL
  static apiNamespace = "/api/v1"

  updateAttributes(attributes) {
    Object.keys(attributes).forEach(attribute => {
      this[attribute] = attributes[attribute]
    })
    return true;
  }
}

@Model()
class Category extends ApplicationRecord {
  static jsonapiType = "categories"

  @Attr() name: string
  @HasMany() recipes: Recipe[]
}

@Model()
class Recipe extends ApplicationRecord {
  static jsonapiType = "recipes"

  @Attr() title: string
  @Attr() description: string
  @Attr() rating: number
  @Attr() category: string

  @BelongsTo() category: Category[]

}

global.Recipe = Recipe
global.Category = Category
