import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tax' })
export class TaxPipe implements PipeTransform {
  transform(total: number): number {
    return total * 0.21; // Calculates tax at 21%
  }
}
