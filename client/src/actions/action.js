import uuid from 'uuid/v1';
import superagent from 'superagent';

let API = `${__API_URL__}`;

export const todoInitialize = () => dispatch => {
  superagent.get(API)
    .then(res => dispatch(initAction(res.body)) )
    .catch(console.error);
};

export const todoCreate = payload => dispatch => {

  superagent.post(API)
    .send(payload)
    .then(res => dispatch(createAction(res.body)) )
    .catch(console.error);
};

export const todoUpdate = payload => dispatch => {

  let URL = `${API}/${payload._id}`;

  superagent.put(URL)
    .send(payload)
    .then(res => dispatch(updateAction(res.body)) )
    .catch(console.error);
};

export const todoDelete = payload => dispatch => {

  let URL = `${API}/${payload._id}`;

  superagent.delete(URL)
    .send(payload)
    .then(res => dispatch(deleteAction(res.body)))
    .catch(console.error);
};


const initAction = list => ({
  type: 'INIT',
  payload: list,
});

const createAction = category => {
  category.id = uuid();
  return {
    type: 'CREATE',
    payload: category,
  };
};
const updateAction = category => ({
  type: 'UPDATE',
  payload: category,
});

const deleteAction = category => ({
  type: 'DELETE',
  payload: category,
});
