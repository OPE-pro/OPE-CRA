import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Agent } from '../cra.model';
import { inject } from '@angular/core';
import { AgentsService } from './agents.service';

type AgentsState = {
  agents: Agent[];
  isLoading: boolean;
};

const initialState: AgentsState = {
  agents: [],
  isLoading: false,
};

export const AgentsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, agentsService = inject(AgentsService)) => ({
    async loadAll(): Promise<void> {
      patchState(store, { isLoading: true });
      const agents = await agentsService.getAll();
      patchState(store, { agents, isLoading: false });
    },
  }))
);
