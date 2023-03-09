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
exports.ordersService = void 0;
const common_1 = require("@nestjs/common");
const orders_repo_1 = require("../repository/orders.repo");
let ordersService = class ordersService {
    constructor(ordersRepo) {
        this.ordersRepo = ordersRepo;
    }
    async findAll() {
        return this.ordersRepo.findAll();
    }
    async create(data) {
        data.createddate = new Date();
        return this.ordersRepo.create(data);
    }
    async update(ordersId, data) {
        return this.ordersRepo.update(ordersId, data);
    }
    async delete(ordersId) {
        return this.ordersRepo.delete(ordersId);
    }
};
ordersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [orders_repo_1.ordersRepo])
], ordersService);
exports.ordersService = ordersService;
//# sourceMappingURL=orders.service.js.map