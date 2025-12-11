/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import logoAsset from './assets/claro-onemind-logo.svg';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  logo: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },
});

type LogoFullProps = {
  className?: string;
};

const LogoFull = ({ className }: LogoFullProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <img
        src={logoAsset}
        alt="Claro OneMind"
        className={classes.logo}
        loading="lazy"
      />
    </div>
  );
};

export default LogoFull;
