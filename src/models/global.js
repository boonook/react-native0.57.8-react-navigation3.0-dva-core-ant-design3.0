import { test } from '../services/api.js';

export default {
  namespace: 'global',
  state: {
    index:'世界',
    str:'boonook',
    data:[{id:1,name:'a'},{id:2,name:'b'}],
    arr:[1,2,3,4],
    obj:{'key':'age','keys':'sex'}
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
