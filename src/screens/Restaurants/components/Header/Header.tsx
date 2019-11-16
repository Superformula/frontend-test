import React, { FC } from 'react';

import { HeaderProps } from './Header.types';
import { Title } from 'shared/components';
import './Header.scss';
import { Grid } from 'shared/components/Grid/Grid';

export const Header: FC<HeaderProps> = ({ title, description }) => (
  <Grid.Row>
    <header className="restaurants-header">
      <Title>{title}</Title>
      <p className="restaurants-header__desc">{description}</p>
    </header>
  </Grid.Row>
);
