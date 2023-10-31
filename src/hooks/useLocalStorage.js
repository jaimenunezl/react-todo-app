import { useReducer, useEffect } from 'react';

const defaultState = ({ initialValue }) => ({
  synchronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  SYNCHRONIZE: 'SYNCHRONIZE',
};

const reducerObject = (state, payload) => ({
  [actionTypes.ERROR]: {
    ...state,
    error: payload,
  },
  [actionTypes.SUCCESS]: {
    ...state,
    error: false,
    loading: false,
    item: payload,
  },
  [actionTypes.SAVE]: {
    ...state,
    item: payload,
  },
  [actionTypes.SYNCHRONIZE]: {
    ...state,
    loading: true,
    synchronizedItem: !state.synchronizedItem,
  },
});

const reducer = (state, action) => {
  const reducerItem = reducerObject(state, action.payload);
  return reducerItem[action.type] || state;
};

export function useLocalStorage(key, initialValue) {
  const [state, dispatch] = useReducer(reducer, defaultState({ initialValue }));

  const { synchronizedItem } = state;

  // action creators
  const onError = (error) => {
    dispatch({ type: actionTypes.ERROR, payload: { error } });
  };

  const onSuccess = (item) => {
    dispatch({ type: actionTypes.SUCCESS, payload: item });
  };

  const onSynchronize = () => {
    dispatch({ type: actionTypes.SYNCHRONIZE });
  };

  // helpers
  const updateItem = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    dispatch({ type: actionTypes.SAVE, payload: value });
    onSynchronize();
  };

  useEffect(() => {
    setTimeout(() => {
      try {
        let itemParsed;
        const value = localStorage.getItem(key);

        if (!value) {
          localStorage.setItem(key, JSON.stringify(initialValue));
          itemParsed = initialValue;
        } else {
          itemParsed = JSON.parse(value);
        }

        onSuccess(itemParsed);
      } catch (error) {
        onError(error);
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [synchronizedItem]);

  return {
    error: state.error,
    item: state.item,
    isLoading: state.loading,
    synchronizeItem: onSynchronize,
    updateItem,
  };
}
