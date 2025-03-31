import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Cra, MissionName } from './cra.model';
import { computed } from '@angular/core';

type CraState = {
  cra: Cra;
  isLoading: boolean;
};


const initialState: CraState = {
  cra: {
    agentCodeName: '',
    imputations: [],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  isLoading: false,
};

export const CraStore = signalStore(
  withState(initialState),
  withComputed(({ cra }) => ({
    holidaysCount: computed(() => {
      return cra.imputations?.()?.filter((imputation) => imputation.missionName === 'Holiday').length ?? 0;

    }),
  })),
  withMethods((store) => ({
    setAgentCodeName(agentCodeName: string): void {
      patchState(store, (state) => ({ cra: { ...state.cra, agentCodeName } }));
    },
    setDayWorked(missionName: MissionName, date: Date): void {
      const cssClassName = missionName.toLowerCase().replace(' ', '-');
      // replace existing one if present
      const existingImputationIndex = store.cra.imputations?.()?.findIndex((imputation) => imputation.date.toDateString() === date.toDateString());
       const newImputations = store.cra.imputations?.();
      if (existingImputationIndex !== undefined && existingImputationIndex !== -1) {
          newImputations[existingImputationIndex] = { date, missionName, cssClassName };
          patchState(store, (state) => ({ cra: { ...state.cra, imputations: [...newImputations] } }));
      } else {
        patchState(store, (state) => ({ cra: { ...state.cra, imputations: [...(state.cra.imputations || []), { date, missionName, cssClassName }] } }));

      }
     },
    removeImputationDay(date: Date): void {
      patchState(store, (state) => ({ cra: { ...state.cra, imputations: state.cra.imputations?.filter((imputation) =>  !(imputation.date.getDate() === date.getDate() &&  imputation.date.getMonth() === date.getMonth() && imputation.date.getFullYear() === date.getFullYear())) } }));
    },
    // max 7 days holidays per month.
    setHoliday(date: Date): void {
      const holidays = store.cra.imputations?.()?.filter((imputation) => imputation.missionName === 'Holiday' && imputation.date.getMonth() === date.getMonth() && imputation.date.getFullYear() === date.getFullYear()) || [];
      if (holidays.length < 7) {
       // replace existing imputation if present
       const existingImputationIndex = store.cra.imputations?.()?.findIndex((imputation) => imputation.date.toDateString() === date.toDateString());
       const newImputations = store.cra.imputations?.();
      if (existingImputationIndex !== undefined && existingImputationIndex !== -1) {
          newImputations[existingImputationIndex] = { date,  missionName: 'Holiday', cssClassName: 'holiday'  };
          patchState(store, (state) => ({ cra: { ...state.cra, imputations: [...newImputations] } }));
      } else {
        patchState(store, (state) => ({ cra: { ...state.cra, imputations: [...(state.cra.imputations || []), { date, missionName: 'Holiday' as MissionName, cssClassName: 'holiday'}] } }));
      }

      }
    }



  }))
);
