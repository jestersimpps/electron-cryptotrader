import { UPDATE_TICKERS, SET_LOADING, SET_SELECTED_TICKER, TOAST_ERROR, TOAST_SUCCESS, TOAST_WARNING } from './actions';
import { UPDATE_INVESTORS } from './actions';
import { TickerDto } from '../models/ticker.model';
import { Investor } from '../models/investor.model';

export interface IAppState {
  tickers: TickerDto[];
  investors: Investor[];
  selectedTicker: TickerDto;
  loading: boolean;
  errorMessage: string;
  successMessage: string;
  warningMessage: string;
}

export const INITIAL_STATE: IAppState = {
  tickers: [],
  investors: [],
  selectedTicker: null,
  loading: false,
  errorMessage: ``,
  successMessage: ``,
  warningMessage: ``,
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case UPDATE_TICKERS:
      return Object.assign({}, state, {
        tickers: action.data,
        loading: false,
      });
    case SET_LOADING:
      return Object.assign({}, state, {
        loading: action.data,
      });
    case SET_SELECTED_TICKER:
      return Object.assign({}, state, {
        selectedTicker: action.data,
        loading: false,
      });
    case TOAST_ERROR:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.data,
        successMessage: ``,
        warningMessage: ``,
      });
    case TOAST_SUCCESS:
      return Object.assign({}, state, {
        successMessage: action.data,
        errorMessage: ``,
        warningMessage: ``,
      });
    case TOAST_WARNING:
      return Object.assign({}, state, {
        warningMessage: action.data,
        errorMessage: ``,
        successMessage: ``,
      });
    default:
      break;
  }
  return state;
}
