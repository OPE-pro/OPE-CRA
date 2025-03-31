import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CraComponent } from './cra.component';
import { provideNativeDateAdapter } from '@angular/material/core';


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
  });
