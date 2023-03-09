"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const menu_controller_1 = require("../controllers/menu.controller");
const menu_service_1 = require("../services/menu.service");
const menu_repo_1 = require("../repository/menu.repo");
const menu_schema_1 = require("../schemas/menu.schema");
let menuModule = class menuModule {
};
menuModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: menu_schema_1.menu.name, schema: menu_schema_1.menuSchema }])
        ],
        controllers: [menu_controller_1.menuController],
        providers: [menu_service_1.menuService, menu_repo_1.menuRepo],
        exports: [menu_service_1.menuService, menu_repo_1.menuRepo]
    })
], menuModule);
exports.menuModule = menuModule;
//# sourceMappingURL=menu.module.js.map