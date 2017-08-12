import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODOS } from './actions';
import { combineReducers } from 'redux';

export interface ToDo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface ITaskingState {
  todos: ToDo[];
  lastUpdate: Date;
}

export const TASKING_INITIAL_STATE: ITaskingState = {
  todos: [],
  lastUpdate: null,
};

const incrementId = (() => {
  let id = 0;

  return () => {
    return ++id;
  };
})();

class ToDoActions {
  constructor (private state: ToDo, private action) { }

  addToDo(): ToDo {
    return {
      id: incrementId(),
      title: this.action.title,
      isCompleted: false
    };
  }

  toggleToDo(): ToDo {
    if (this.state.id !== this.action.id) {
      return this.state;
    } else {
      return {
        ...this.state,
        isCompleted: !this.state.isCompleted
      };
    }
  }
}

const toDo = (state: ToDo = null, action): ToDo => {
  const actions = new ToDoActions(state, action);

  switch (action.type) {
    case ADD_TODO:
      return actions.addToDo();
    case TOGGLE_TODO:
      return actions.toggleToDo();
    default:
      return state;
  }
};

class ToDosActions {
  constructor (private state: ToDo[], private action) { }

  addToDo(): ToDo[] {
    return [
      ...this.state,
      toDo(undefined, this.action)
    ];
  }

  toggleToDo(): ToDo[] {
    return  this.state.map(t => toDo(t, this.action));
  }

  removeToDo(): ToDo[] {
    return  this.state.filter(t => t.id !== this.action.id);
  }

  clearToDos(): ToDo[] {
    return [];
  }
}

const todos = (state: ToDo[] = [], action): ToDo[] => {
  const actions = new ToDosActions(state, action);

  switch (action.type) {
    case ADD_TODO:
      return actions.addToDo();
    case TOGGLE_TODO:
      return  actions.toggleToDo();
    case REMOVE_TODO:
      return  actions.removeToDo();
    case CLEAR_TODOS:
      return  actions.clearToDos();
    default:
      return state;
  }
};

const lastUpdate = (state: Date = null, action) => {
  switch (action.type) {
    case ADD_TODO:
    case TOGGLE_TODO:
    case REMOVE_TODO:
    case CLEAR_TODOS:
      return new Date();
    default:
      return state;
  }
};

export const tasking = combineReducers<ITaskingState>({
  todos,
  lastUpdate
});
