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
exports.ordersDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ordersDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { cartid: { required: true, type: () => String }, odate: { required: true, type: () => Date }, cname: { required: true, type: () => String }, cstreet: { required: true, type: () => String }, cpostal: { required: true, type: () => Number, minLength: 5, maxLength: 6 }, ccity: { required: true, type: () => String }, cphone: { required: true, type: () => String, minLength: 10, maxLength: 10 } };
    }
}
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ordersDto.prototype, "odate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ordersDto.prototype, "cname", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(6),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", Number)
], ordersDto.prototype, "cpostal", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ordersDto.prototype, "ccity", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.MaxLength)(10),
    (0, class_validator_1.MinLength)(10),
    __metadata("design:type", String)
], ordersDto.prototype, "cphone", void 0);
exports.ordersDto = ordersDto;
//# sourceMappingURL=orders-dto.dto.js.map