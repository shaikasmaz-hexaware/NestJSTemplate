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
exports.menuDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class menuDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { mname: { required: true, type: () => String }, mImage: { required: true, type: () => String }, mdesc: { required: true, type: () => String }, mprice: { required: true, type: () => Number }, toppings: { required: true }, mquant: { required: true, type: () => Number }, combo: { required: true, type: () => Boolean } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], menuDto.prototype, "mname", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], menuDto.prototype, "mImage", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], menuDto.prototype, "mdesc", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], menuDto.prototype, "mprice", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], menuDto.prototype, "toppings", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], menuDto.prototype, "mquant", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], menuDto.prototype, "combo", void 0);
exports.menuDto = menuDto;
//# sourceMappingURL=menu-dto.dto.js.map