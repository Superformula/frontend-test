import React, { FC } from 'react';

import { Container } from './Container/Container';
import { Row } from './Row/Row';

export const Grid: FC & {
  Container: typeof Container;
  Row: typeof Row;
} = ({ children }) => <>{children}</>;

Grid.Container = Container;
Grid.Row = Row;
