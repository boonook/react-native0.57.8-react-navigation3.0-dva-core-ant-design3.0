import { test } from '../services/api.js';

export default {
  namespace: 'global',
  state: {
    index:'世界'
  },
  subscriptions: {

  },
  effects: {
    *change({payload},{call,put}){
      yield call(test);
      yield put({
        type:'default',
        payload
      })
    }
  },
  reducers: {
    default(state,aciton){
      return{
        ...state,
        ...aciton.payload
      }
    }
  }
}
