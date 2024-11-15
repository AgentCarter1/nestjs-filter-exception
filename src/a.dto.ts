import { IsMongoId, IsString } from 'class-validator';

export class IdDto {
  @IsString({ message: 'validation.isEmail' })
  id: string;

  //   @IsString({ message: 'validation.isString' })
  //   name: string;
}
