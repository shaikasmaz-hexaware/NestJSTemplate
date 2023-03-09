"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const orders_controller_1 = require("../controllers/orders.controller");
const orders_service_1 = require("../services/orders.service");
const orders_repo_1 = require("../repository/orders.repo");
const orders_schema_1 = require("../schemas/orders.schema");
let ordersModule = class ordersModule {
};
ordersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: orders_schema_1.orders.name, schema: orders_schema_1.ordersSchema }])
        ],
        controllers: [orders_controller_1.ordersController],
        providers: [orders_service_1.ordersService, orders_repo_1.ordersRepo],
        exports: [orders_service_1.ordersService, orders_repo_1.ordersRepo]
    })
], ordersModule);
exports.ordersModule = ordersModule;
//# sourceMappingURL=orders.module.js.map