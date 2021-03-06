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
const pyi_1 = require("pyi");
const db_component_1 = require("../components/db.component");
const user_model_1 = require("../models/user.model");
let TestService = class TestService extends pyi_1.PYIService {
    async findAllUsers() {
        return await this.db.table(user_model_1.User).findAll().then((row) => {
            return row.map((resp) => resp.toJSON());
        });
    }
    async findUser() {
        let data = {};
        [data] = await this.db.instance().query(`SELECT * FROM test1`);
        return data;
    }
};
__decorate([
    pyi_1.autowired,
    __metadata("design:type", db_component_1.DBComponent)
], TestService.prototype, "db", void 0);
TestService = __decorate([
    pyi_1.Service
], TestService);
exports.TestService = TestService;

//# sourceMappingURL=../sourcemaps/services/test.service.js.map
