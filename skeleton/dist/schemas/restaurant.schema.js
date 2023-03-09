"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantSchema = exports.restaurant = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let restaurant = class restaurant {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], restaurant.prototype, "rid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], restaurant.prototype, "rname", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], restaurant.prototype, "rzip", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], restaurant.prototype, "raddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], restaurant.prototype, "rstate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], restaurant.prototype, "rcity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], restaurant.prototype, "rphone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], restaurant.prototype, "kphone", void 0);
restaurant = __decorate([
    (0, mongoose_1.Schema)()
], restaurant);
exports.restaurant = restaurant;
exports.restaurantSchema = mongoose_1.SchemaFactory.createForClass(restaurant);
//# sourceMappingURL=restaurant.schema.js.map