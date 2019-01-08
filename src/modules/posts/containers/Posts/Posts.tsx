import React from 'react';
import { asyncLocalStorage } from 'modules/page-layout/helpers';

export const Posts = () => (
  <div onClick={() => asyncLocalStorage.clear()}>Posts</div>
);
