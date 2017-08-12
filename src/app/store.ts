import { combineReducers } from 'redux';

import { tasking, ITaskingState, TASKING_INITIAL_STATE } from './tasking/store';
import { messaging, IMessagingState, MESSAGING_INITIAL_STATE } from './messaging/store';

export interface IAppState {
  tasking: ITaskingState;
  messaging: IMessagingState;
}

export const INITIAL_STATE: IAppState = {
  tasking: TASKING_INITIAL_STATE,
  messaging: MESSAGING_INITIAL_STATE
};

export const rootReducer = combineReducers<IAppState>({
  tasking,
  messaging
});
