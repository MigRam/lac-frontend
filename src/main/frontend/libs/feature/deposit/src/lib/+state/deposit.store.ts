import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { VISIBILITY_FILTER } from "../filter/filter.model";

export class DepositStateEntities {
  ODataContext: string;
  ODataId: string;
  ODataType: string;
  Accept: Array<string>;
  AcceptArchiveFormat: string;
  AcceptDeposits: boolean;
  AcceptMetadata: string;
  AcceptPackaging: string;
  Authentication: string;
  ByReferenceDeposit: true
  DublinCoreTitle: string;
  Digest: string;
  Links: Array<string>;
  MaxByReferenceSize: number;
  MaxUploadSize: number;
  OnBehalfOf: boolean;

  constructor(json: any) {
    this.ODataContext = json['@context'];
    this.ODataId = json['@id'];
    this.ODataType = json['@type'];
    this.Accept = json['accept'];
    this.AcceptArchiveFormat = json['acceptArchiveFormat'];
    this.AcceptDeposits = json['acceptDeposits'];
    this.AcceptMetadata = json['acceptMetadata'];
    this.AcceptPackaging = json['acceptPackaging'];
    this.Authentication = json['authentication'];
    this.ByReferenceDeposit = json['byReferenceDeposit'];
    this.DublinCoreTitle = json['dc:title'];
    this.Digest = json['digest'];
    this.Links = json['links'];
    this.MaxByReferenceSize = json['maxByReferenceSize'];
    this.MaxUploadSize = json['maxUploadSize'];
    this.OnBehalfOf = json['onBehalfOf']
  }

}

export interface DepositState {
  key: string;
  entities: DepositStateEntities
  ui: {
    filter: VISIBILITY_FILTER
  }
}

const initialState = {
  ui: { filter: VISIBILITY_FILTER.SHOW_ALL }
};

export function createInitialState(): DepositState {
  return {
    key: '',
    entities: null,
    ui: {
      filter: null
    }
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'deposit' })
export class DepositStore extends Store<DepositState> {

  constructor() {
    super(createInitialState());
  }

  updateFilter(filter: VISIBILITY_FILTER) {
    this.update({
      ui: { filter }
    })
  }

}

