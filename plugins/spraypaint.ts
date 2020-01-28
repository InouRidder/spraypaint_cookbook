var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SpraypaintBase, Model, Attr, HasMany, BelongsTo } from "spraypaint";
import 'isomorphic-fetch';
let ApplicationRecord = class ApplicationRecord extends SpraypaintBase {
    updateAttributes(attributes) {
        Object.keys(attributes).forEach(attribute => {
            this[attribute] = attributes[attribute];
        });
        return true;
    }
};
ApplicationRecord.baseUrl = process.env.API_URL;
ApplicationRecord.apiNamespace = "/api/v1";
ApplicationRecord = __decorate([
    Model()
], ApplicationRecord);
let Category = class Category extends ApplicationRecord {
};
Category.jsonapiType = "categories";
__decorate([
    Attr()
], Category.prototype, "name", void 0);
__decorate([
    HasMany()
], Category.prototype, "recipes", void 0);
Category = __decorate([
    Model()
], Category);
let Recipe = class Recipe extends ApplicationRecord {
};
Recipe.jsonapiType = "recipes";
__decorate([
    Attr()
], Recipe.prototype, "title", void 0);
__decorate([
    Attr()
], Recipe.prototype, "description", void 0);
__decorate([
    Attr()
], Recipe.prototype, "rating", void 0);
__decorate([
    BelongsTo()
], Recipe.prototype, "category", void 0);
Recipe = __decorate([
    Model()
], Recipe);
// This is probably not the right way to do things.
global.Recipe = Recipe;
global.Category = Category;
