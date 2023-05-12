import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(date: Date): string {
    const formattedDate = new DatePipe('en-US').transform(date, 'MMMM d y');
    const day = date.getDate();
    const suffix = this.getOrdinalSuffix(day);
    const time = new DatePipe('en-US').transform(date, 'h:mm a');
    return `${day}${suffix} ${formattedDate} at ${time}`;
  }

  private getOrdinalSuffix(day: number): string {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const index = day % 100 >= 11 && day % 100 <= 13 ? 0 : day % 10;
    return suffixes[index] || suffixes[0];
  }
}
