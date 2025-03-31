import { Injectable } from '@angular/core';
import { Agent } from '../cra.model';

@Injectable({
  providedIn: 'root',
})
export class AgentsService {
  private mockAgents = [
    { id: 1, name: 'Alpha', agentCodeName: 'alpha' },
    { id: 2, name: 'Béta', agentCodeName: 'beta' },
    { id: 3, name: 'Gamma', agentCodeName: 'gamma' },
  ];

  getAll(): Promise<Agent[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mockAgents);
      }, 1000);
    });
  }
}
