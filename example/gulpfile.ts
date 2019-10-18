import { GFile, Task, TSC } from 'gyi';
import { join } from 'path';
import { remove } from 'fs-extra';
import nodemon from 'gulp-nodemon';

@GFile
export class GulpFile {

    @Task({
        src: join(__dirname, 'src/**/*.ts'),
        dest: join(__dirname, 'app')
    })
    public async build(tsc: TSC) {
        await new Promise(r => remove(join(__dirname, 'app'), r));
        await tsc.runtime(join(__dirname, 'src/**/*.ts'), join(__dirname, 'app'));
    }

    @Task()
    public async nodemon() {
        nodemon({
            script: join(__dirname, 'src/starter.ts'),
            args: ['-r', 'ts-node/register'],
            ext: 'ts',
            watch: [
                join(__dirname, 'src/**/*.ts')
            ],
            stdin: true,
            stdout: true
        });
    }
}
