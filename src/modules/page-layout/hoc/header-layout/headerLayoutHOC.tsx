import React, { SFC, ReactElement, ReactNode } from 'react';
import { curry } from 'ramda';

type HeahderLayoutProps = {
  headerClassName?: string;
  pageContentClassName?: string;
};

export const headerLayoutHOC = curry(
  (header: ReactNode, pageContent: ReactNode) => {
    const HeaderLayout: SFC<HeahderLayoutProps> = ({
      headerClassName,
      pageContentClassName,
    }) =>
      (
        <>
          <div className={headerClassName}>{header}</div>
          <div className={pageContentClassName}>{pageContent}</div>
        </>
      ) as ReactElement<any>;

    return HeaderLayout;
  }
);
