#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("ts-node/register");
const path_1 = require("path");
const args_1 = __importDefault(require("args"));
const fs_1 = require("fs");
const colors_1 = require("colors");
const moment_1 = __importDefault(require("moment"));
const request_1 = __importDefault(require("request"));
const unzip_1 = require("unzip");
const fs_extra_1 = require("fs-extra");
const lodash_1 = require("lodash");
const pyi_1 = require("pyi");
const gulp_1 = require("gulp");
const gulp_sourcemaps_1 = require("gulp-sourcemaps");
const gulp_typescript_1 = require("gulp-typescript");
const merge2_1 = __importDefault(require("merge2"));
const gulp_install_1 = __importDefault(require("gulp-install"));
args_1.default.command('create', 'create new project ...', async (name, sub, options) => {
    if (!sub[0]) {
        return await console.log(colors_1.red('not have project name ...'));
    }
    await console.log(colors_1.green('download https://github.com/huaqingyi/pyi-template/archive/master.zip ...'));
    const time = moment_1.default().format('YYYY-MM-DD HH');
    const pack = path_1.join(__dirname, `../.temp/${time}.zip`);
    if (!fs_1.existsSync(pack)) {
        console.log(colors_1.green('redownload https://github.com/huaqingyi/pyi-template/archive/master.zip ...'));
        await new Promise((r) => fs_extra_1.remove(path_1.dirname(pack), r));
        await new Promise((r) => fs_extra_1.mkdir(path_1.dirname(pack), r));
        await new Promise((r) => request_1.default('http://github.com/huaqingyi/pyi-template/archive/master.zip')
            .pipe(fs_1.createWriteStream(pack)).on('close', r));
    }
    await console.log(colors_1.green('download success ...'));
    const unzipdir = path_1.join(path_1.dirname(pack), 'resource');
    const packdir = path_1.join(unzipdir, 'pyi-template-master');
    await new Promise((r) => fs_1.createReadStream(pack)
        .pipe(unzip_1.Extract({ path: unzipdir })).on('close', r));
    await console.log(colors_1.green('unzip success ...'));
    const pdir = path_1.join(process.cwd(), sub[0]);
    await fs_extra_1.copy(packdir, pdir);
    await console.log(colors_1.green('copy success ...'));
}).command('build', 'build appliaction ...', async (name, sub) => {
    if (!sub[0]) {
        return await console.log(colors_1.red('not have application path ...'));
    }
    const apath = path_1.join(process.cwd(), sub[0]);
    const project = await Promise.resolve().then(() => __importStar(require(apath)));
    const paths = await Promise.all(lodash_1.map(project, async (app) => {
        const { _root } = app;
        if (_root && _root() === pyi_1.PYIApplication) {
            return await new Promise((r) => {
                // tslint:disable-next-line:only-arrow-functions
                app.prototype.run = (async function (...props) {
                    await r(...props);
                }.bind(app.prototype));
                // tslint:disable-next-line:no-unused-expression
                new app();
            });
        }
        else {
            return false;
        }
    }));
    let ps = [];
    lodash_1.map(paths, (path) => {
        if (path !== false) {
            if (lodash_1.isString(path)) {
                path = [path];
            }
            ps = ps.concat(path);
        }
    });
    const outpath = path_1.join(path_1.dirname(apath), '../app');
    const tsr = gulp_1.src(ps).pipe(gulp_sourcemaps_1.init()).pipe(gulp_typescript_1.createProject(require('../package.json').compilerOptions)());
    const tscr = await merge2_1.default([
        tsr.dts.pipe(gulp_1.dest(outpath)),
        tsr.js.pipe(gulp_sourcemaps_1.write('./sourcemaps'))
            .pipe(gulp_1.dest(outpath))
    ]).pipe(gulp_install_1.default());
    return tscr;
});
args_1.default.parse(process.argv);

//# sourceMappingURL=sourcemaps/index.js.map
