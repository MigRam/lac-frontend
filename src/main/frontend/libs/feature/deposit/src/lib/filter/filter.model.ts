export enum VISIBILITY_FILTER {
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_ALL = 'SHOw_ALL'
}

export type depositFilter = {
  label: string;
  value: VISIBILITY_FILTER
}

export const initialFilters: depositFilter[] = [
  { label: 'all', value: VISIBILITY_FILTER.SHOW_ALL },
  { label: 'active', value: VISIBILITY_FILTER.SHOW_ACTIVE }
];
