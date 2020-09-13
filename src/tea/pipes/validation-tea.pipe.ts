import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationTeaPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    console.log('value', value)
    console.log('metadata', metadata)
    return value;
  }
}
