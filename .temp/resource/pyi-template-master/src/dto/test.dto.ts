import { Dto, PYIDto } from 'pyi';

@Dto
export class TestDto extends PYIDto {
    public err!: boolean;
    public data!: any;
}
