'use strict';

import React from 'react';

import uuid from 'uuid/v1';


export const catCreate = (category) => {


  category.id = uuid();
  category.timeStamp = new Date().toLocaleString();
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};

export const catUpdate = (category) => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  };
};

export const catDelete = (category) => {
  return {
    type: 'CATEGORY_DELETE',
    payload: category,
  };
};
