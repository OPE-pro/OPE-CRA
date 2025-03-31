import { AgentsStore } from './agents.store';

describe('AgentsStore', () => {
  const componentStore = new AgentsStore();

  it('should be created', () => {
    expect(componentStore).toBeTruthy();
  });
});
