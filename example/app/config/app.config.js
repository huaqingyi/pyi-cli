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
let AppConfiguration = class AppConfiguration extends pyi_1.PYIAutoAppConfiguration {
    constructor(props) {
        super();
        this.port = 4000;
    }
    async development() {
        this.port = 4001;
    }
    async production() {
        this.port = 4002;
    }
};
AppConfiguration = __decorate([
    pyi_1.Configuration,
    __metadata("design:paramtypes", [Object])
], AppConfiguration);
exports.AppConfiguration = AppConfiguration;

//# sourceMappingURL=../sourcemaps/config/app.config.js.map
