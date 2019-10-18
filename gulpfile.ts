import { GFile, Task, TSC } from 'gyi';
import { join } from 'path';

@GFile
export class GulpFile {

    @Task({
        src: join(__dirname, 'src/**/*.ts'),
        dest: join(__dirname, 'bin')
    })
    // tslint:disable-next-line:no-shadowed-variable
    public async build(tsc: TSC) {
        tsc.runtime(join(__dirname, 'src/**/*.ts'), join(__dirname, 'bin'));
    }
}
