import { ID } from '@datorama/akita';

export interface Discovery {
  id: ID;
}

export function createInitialDiscoveryState(params: Partial<Discovery>) {
  return {
    id: null
  } as Discovery;
}
