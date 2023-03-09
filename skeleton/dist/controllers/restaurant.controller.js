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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const restaurant_dto_dto_1 = require("../dto/restaurant-dto.dto");
const restaurant_service_1 = require("../services/restaurant.service");
let restaurantController = class restaurantController {
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    async create(restaurantDto) {
        const res = this.restaurantService.create(restaurantDto);
        return res;
    }
    async findAll() {
        return this.restaurantService.findAll();
    }
    update(id, restaurantDto) {
        return this.restaurantService.update(id, restaurantDto);
    }
    delete(id) {
        return this.restaurantService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../schemas/restaurant.schema").restaurant }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_dto_dto_1.restaurantDto]),
    __metadata("design:returntype", Promise)
], restaurantController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../schemas/restaurant.schema").restaurant] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], restaurantController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200, type: require("../schemas/restaurant.schema").restaurant }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, restaurant_dto_dto_1.restaurantDto]),
    __metadata("design:returntype", void 0)
], restaurantController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200, type: require("../schemas/restaurant.schema").restaurant }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], restaurantController.prototype, "delete", null);
restaurantController = __decorate([
    (0, common_1.Controller)('restaurant'),
    __metadata("design:paramtypes", [restaurant_service_1.restaurantService])
], restaurantController);
exports.restaurantController = restaurantController;
//# sourceMappingURL=restaurant.controller.js.map