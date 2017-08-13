import { INCREMENT, DECREMENT } from './actions';

export type IMessagingState = number;
export const MESSAGING_INITIAL_STATE = 0;

class MessagingActions {
  constructor (private state: IMessagingState, private action) { }

  increment(): IMessagingState {
    return this.state + 1;
  }

  decrement(): IMessagingState {
    return this.state > 0 ? this.state - 1 : 0;
  }
}

export const messaging = (state: IMessagingState = 0, action): IMessagingState => {
  const actions = new MessagingActions(state, action);

  switch (action.type) {
    case INCREMENT:
      return actions.increment();
    case DECREMENT:
      return actions.decrement();
    default:
      return state;
  }
};
