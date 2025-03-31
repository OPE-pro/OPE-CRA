import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CraComponent } from './cra.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { addDays, startOfMonth } from 'date-fns';


  describe('CraComponent', () => {
    let component: CraComponent;
    let fixture: ComponentFixture<CraComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [CraComponent],
        providers: [
          provideNativeDateAdapter(), // Add the native date adapter provider
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(CraComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should add a mission to the imputations array when setDay is called', () => {
      const missionName = 'Mission 1';
      const selectedDate = new Date();
      component.selected.set(selectedDate);

      component.setDay(missionName);

      const imputations = component.store.cra.imputations?.() ?? [];
      const addedMission = imputations.find(
        (imputation) =>
          imputation.date?.getTime() === selectedDate.getTime() &&
          imputation.missionName === missionName
      );

      expect(addedMission).toBeTruthy();
    });

    it('should remove a mission from the imputations array when removeImputationDay is called', () => {
      const selectedDate = new Date();
      component.selected.set(selectedDate);

      // Simulate adding a mission first
      component.setDay('Mission 1');
      let imputations = component.store.cra.imputations?.() ?? [];
      expect(imputations.length).toBe(1);

      // Remove the mission
      component.removeImputationDay();
      imputations = component.store.cra.imputations?.() ?? [];
      expect(imputations.length).toBe(0);
    });

    it('should set a holiday in the imputations array when setHoliday is called', () => {
      const selectedDate = new Date();
      component.selected.set(selectedDate);

      component.setHoliday();

      const imputations = component.store.cra.imputations?.() ?? [];
      const holiday = imputations.find(
        (imputation) => imputation.date?.getTime() === selectedDate.getTime() && imputation.missionName === 'Holiday'
      );

      expect(holiday).toBeTruthy();
    });

    it('should set two holidays in the imputations array when setHoliday is called twice', () => {
      const selectedDate = new Date();
      component.selected.set(selectedDate);
      component.setHoliday();

      component.selected.set(addDays(selectedDate, 1));
      component.setHoliday();


      expect( component.store.holidaysCount()).toBe(2);
    });

    it('should not set more than 7 holidays in the imputations array when setHoliday is called 8 times', () => {
      const selectedDate =  startOfMonth(new Date());
      for (let i = 0; i < 10; i++) {
        component.selected.set(addDays(selectedDate, i));
        component.setHoliday();

      }
      expect( component.store.holidaysCount()).toBe(7);
    });


  });
