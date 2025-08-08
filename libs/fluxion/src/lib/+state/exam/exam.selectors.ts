import { createFeatureSelector, createSelector } from '@ngrx/store';
import { examsAdapter, examsFeatureKey, ExamState } from './exam.reducer';

export const selectWebsitesState =
  createFeatureSelector<ExamState>(examsFeatureKey);
const { selectAll } = examsAdapter.getSelectors();

export const selectAllWebsites = createSelector(
  selectWebsitesState,
  selectAll
);

