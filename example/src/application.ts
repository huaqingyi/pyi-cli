import { PYIBootstrap, PYIApplication, PYIApplicationImpl, autowired } from 'pyi';
import { join } from 'path';
import { ScheduleComponent } from './components/schedule.component';
import { SwaggerInjectService, Swagger } from 'pyi-swagger';

@PYIBootstrap
export class Application extends PYIApplication implements PYIApplicationImpl {

    @autowired
    public schedule!: ScheduleComponent;

    constructor() {
        super();
        this.run([
            join(__dirname, '**/**.ts'),
            join(__dirname, '**/**.js')
        ]);
    }

    public async onInit() {
        SwaggerInjectService.register();
        console.log('onInit ...');
    }

    public async didLoad() {
        console.log('didLoad ...');
    }

    public async onInitComponent() {
        console.log('onInitComponent ...');
    }

    public async didInitComponent() {
        console.log('didInitComponent ...');
    }

    public async didMakeConfig() {
        console.log('didMakeConfig ...');
        Swagger.build('/swagger.io', this);
    }

    public async didRuntime() {
        console.log('didRuntime ...');
        await this.schedule.test();
    }
}
