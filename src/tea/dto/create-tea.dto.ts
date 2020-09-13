import { IsNotEmpty } from "class-validator";
export class CreateTeaDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  flavour: string;
}