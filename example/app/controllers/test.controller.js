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
var TestController_1;
Object.defineProperty(exports, "__esModule", { value: true });
const pyi_1 = require("pyi");
const test_service_1 = require("../services/test.service");
const test_dto_1 = require("../dto/test.dto");
const routing_controllers_1 = require("routing-controllers");
const pyi_swagger_1 = require("pyi-swagger");
const tag = pyi_swagger_1.tags(['TestController']);
const userSchema = {
    name: { type: 'string', required: true },
    password: { type: 'string', required: true }
};
let TestController = TestController_1 = class TestController extends pyi_1.PYIController {
    index() {
        // tslint:disable-next-line:max-classes-per-file
        return pyi_1.PYIExecption(class extends TestController_1 {
            async throws() {
                return await 'Hello PYI ...';
            }
        });
    }
    error() {
        // tslint:disable-next-line:max-classes-per-file
        return pyi_1.PYIExecption(class extends TestController_1 {
            async throws() {
                this.errno = 1000;
                this.errmsg = 'test error ...';
                throw new Error('test error');
                return await 'Hello PYI ...';
            }
        });
    }
    async test(response, gets, body) {
        // console.log(await this.service.findAllUsers());
        return await 'Hello World ...';
    }
};
__decorate([
    pyi_1.autowired,
    __metadata("design:type", test_service_1.TestService)
], TestController.prototype, "service", void 0);
__decorate([
    pyi_1.RequestMapping({
        prefix: '/'
    }),
    pyi_swagger_1.request(pyi_1.RequestMappingMethod.GET, '/'),
    pyi_swagger_1.summary('test get index'),
    tag,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", test_dto_1.TestDto)
], TestController.prototype, "index", null);
__decorate([
    pyi_1.RequestMapping({
        prefix: '/error'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", test_dto_1.TestDto)
], TestController.prototype, "error", null);
__decorate([
    pyi_1.RequestMapping({
        prefix: '/test',
    }),
    __param(0, routing_controllers_1.Res()),
    __param(1, routing_controllers_1.QueryParams()),
    __param(2, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "test", null);
TestController = TestController_1 = __decorate([
    pyi_1.Controller
], TestController);
exports.TestController = TestController;

//# sourceMappingURL=../sourcemaps/controllers/test.controller.js.map
