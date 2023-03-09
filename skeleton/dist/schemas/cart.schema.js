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
exports.cartSchema = exports.cart = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let cart = class cart {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], cart.prototype, "menuid", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], cart.prototype, "cartitems", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], cart.prototype, "ctotal", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], cart.prototype, "discval", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], cart.prototype, "coupval", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], cart.prototype, "coupcode", void 0);
cart = __decorate([
    (0, mongoose_1.Schema)()
], cart);
exports.cart = cart;
exports.cartSchema = mongoose_1.SchemaFactory.createForClass(cart);
//# sourceMappingURL=cart.schema.js.map