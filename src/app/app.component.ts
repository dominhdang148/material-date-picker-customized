import { Component } from '@angular/core';
import {
  MatCalendarCellCssClasses,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-datepicker';

  blockedDate: Date[] = [new Date('2026-08-14'), new Date('2026-08-16')];

  warnedDate: Date[] = [new Date('2026-08-02'), new Date('2026-08-10')];

  dateClass = (date: Date): MatCalendarCellCssClasses => {
    const dateString: string = date.toDateString();

    if (this.blockedDate.some((date) => date.toDateString() === dateString))
      return 'blocked-date';

    if (this.warnedDate.some((date) => date.toDateString() === dateString))
      return 'warned-date';

    return '';
  };
  onDateInput(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;

    if (!selectedDate) return;

    const dateString = selectedDate.toDateString();

    if (this.blockedDate.some((date) => date.toDateString() === dateString)) {
      event.target.value = null;
      console.log('ERROR');
    }
  }
}
