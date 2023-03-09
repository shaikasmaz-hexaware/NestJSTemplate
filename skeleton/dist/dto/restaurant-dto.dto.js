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
exports.restaurantDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class restaurantDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { rid: { required: true, type: () => String }, rname: { required: true, type: () => String }, rzip: { required: true, type: () => Number, minLength: 5, maxLength: 6 }, raddress: { required: true, type: () => String }, rstate: { required: true, type: () => String }, rcity: { required: true, type: () => String }, rphone: { required: true, type: () => String }, kphone: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], restaurantDto.prototype, "rname", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.MaxLength)(6),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", Number)
], restaurantDto.prototype, "rzip", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], restaurantDto.prototype, "raddress", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], restaurantDto.prototype, "rstate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], restaurantDto.prototype, "rcity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], restaurantDto.prototype, "rphone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], restaurantDto.prototype, "kphone", void 0);
exports.restaurantDto = restaurantDto;
//# sourceMappingURL=restaurant-dto.dto.js.map