import React from 'react';

import { headerLayoutHOC } from 'modules/page-layout/hoc/header-layout';
import { Header } from 'modules/page-layout/containers/Header';

const postsHeaderLayoutHOC = headerLayoutHOC(<Header />);

export { postsHeaderLayoutHOC };
