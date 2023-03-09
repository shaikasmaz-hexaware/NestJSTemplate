"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const restaurant_controller_1 = require("../controllers/restaurant.controller");
const restaurant_service_1 = require("../services/restaurant.service");
const restaurant_repo_1 = require("../repository/restaurant.repo");
const restaurant_schema_1 = require("../schemas/restaurant.schema");
let restaurantModule = class restaurantModule {
};
restaurantModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: restaurant_schema_1.restaurant.name, schema: restaurant_schema_1.restaurantSchema }])
        ],
        controllers: [restaurant_controller_1.restaurantController],
        providers: [restaurant_service_1.restaurantService, restaurant_repo_1.restaurantRepo],
        exports: [restaurant_service_1.restaurantService, restaurant_repo_1.restaurantRepo]
    })
], restaurantModule);
exports.restaurantModule = restaurantModule;
//# sourceMappingURL=restaurant.module.js.map