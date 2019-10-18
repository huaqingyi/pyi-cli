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
const path_1 = require("path");
const schedule_component_1 = require("./components/schedule.component");
const pyi_swagger_1 = require("pyi-swagger");
let Application = class Application extends pyi_1.PYIApplication {
    constructor() {
        super();
        this.run([
            path_1.join(__dirname, '**/**.ts'),
            path_1.join(__dirname, '**/**.js')
        ]);
    }
    async onInit() {
        pyi_swagger_1.SwaggerInjectService.register();
        console.log('onInit ...');
    }
    async didLoad() {
        console.log('didLoad ...');
    }
    async onInitComponent() {
        console.log('onInitComponent ...');
    }
    async didInitComponent() {
        console.log('didInitComponent ...');
    }
    async didMakeConfig() {
        console.log('didMakeConfig ...');
        pyi_swagger_1.Swagger.build('/swagger.io', this);
    }
    async didRuntime() {
        console.log('didRuntime ...');
        await this.schedule.test();
    }
};
__decorate([
    pyi_1.autowired,
    __metadata("design:type", schedule_component_1.ScheduleComponent)
], Application.prototype, "schedule", void 0);
Application = __decorate([
    pyi_1.PYIBootstrap,
    __metadata("design:paramtypes", [])
], Application);
exports.Application = Application;

//# sourceMappingURL=sourcemaps/application.js.map
