import { ChangeDetectionStrategy, Component, effect, inject, input, model, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCalendar, MatCalendarCellClassFunction, MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { startOfMonth, addMonths } from 'date-fns';
import { CraStore } from './cra.store';
import { MissionName } from './cra.model';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'lib-cra',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDatepickerModule, MatTabsModule],
  templateUrl: './cra.component.html',
  providers: [CraStore, provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CraComponent {
  readonly store = inject(CraStore);
  public agentCodeName = input<string>('');
  public selected = model<Date | null>(null);
  public firstDayOfCurrent = startOfMonth(new Date());
  public nextOneMonth = addMonths(new Date(), 1);
  public nextTwoMonth = addMonths(new Date(), 2);
  showThreeMonthview = signal(false);

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();
      const month = cellDate.getMonth();
      const year = cellDate.getFullYear();

      // Highlight thes days present in the imputations array.
      const imputations = this.store.cra.imputations?.() ?? [];
      const imputationDayFound = imputations.find((imputation) => {
        return imputation.date?.getDate() === date && imputation.date?.getMonth() === month && imputation.date?.getFullYear() === year;
      });
      return imputationDayFound ? imputationDayFound.cssClassName : '';
    }

    return '';
  };
  @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;


  constructor() {
    effect(() => {
      this.store.setAgentCodeName(this.agentCodeName());
    });
    effect(() => {
      if (this.store.cra.imputations?.()) {
        this.calendar?.updateTodaysDate();
      }
    });
  }

  setDay(missionName: MissionName): void {
    this.store.setDayWorked(missionName, this.selected()!);
  }

  setHoliday(): void {
    this.store.setHoliday(this.selected()!);
  }

  removeImputationDay(): void {
    this.store.removeImputationDay(this.selected()!);
  }

  onTabChange(event: any) {
    // trick to force update material dateClass colors on three months calendars
    this.showThreeMonthview.update(()=> false);
    setTimeout(() => {
      this.showThreeMonthview.update(()=> true);
    }, 200);
  }
}


