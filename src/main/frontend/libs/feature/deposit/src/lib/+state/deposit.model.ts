import {guid, ID} from '@datorama/akita';

export interface DepositEntity {
  '@context': string;
  '@id': string;
  '@type': string;
  accept: Array<string>;
  acceptArchiveFormat: string;
  acceptDeposits: boolean;
  acceptMetadata: string;
  acceptPackaging: string;
  authentication: string;
  byReferenceDeposit: true
  'dc:title': string;
  digest: string;
  links: Array<string>;
  maxByReferenceSize: number;
  maxUploadSize: number;
  onBehalfOf: boolean;
}

export interface Deposit {
  id: ID;
  payload: DepositEntity
}

export function createDeposit( ) {
  return {
    id: guid(),
    payload: null,
  } as Deposit;
}
