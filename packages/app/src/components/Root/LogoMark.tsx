/*
 * Copyright 2025 The Backstage Authors
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
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const cloudPath =
  'M74 22c-21.8 0-39.5 17.4-39.5 38.8 0 .86.02 1.7.08 2.54C15.9 65.44 0 82.73 0 104.2 0 128.6 20 148 44.6 148h109.4c25.9 0 47-20.06 47-44.76 0-22.25-15.96-40.76-37.3-44.79C157.3 34.28 136.07 16 109.52 16a63.77 63.77 0 0 0-22.38 4A47 47 0 0 0 74 22Z';

const useStyles = makeStyles({
  svg: {
    display: 'block',
  },
  cloud: {
    fill: '#e32726',
  },
  bubble: {
    fill: '#fff',
  },
  dot: {
    fill: '#e32726',
  },
});

export type LogoMarkProps = {
  className?: string;
};

export const LogoMark = ({ className }: LogoMarkProps) => {
  const classes = useStyles();

  return (
    <svg
      viewBox="0 0 220 160"
      role="img"
      aria-label="Símbolo Claro OneMind"
      className={clsx(classes.svg, className)}
    >
      <path className={classes.cloud} d={cloudPath} />
      <circle className={classes.bubble} cx={150} cy={110} r={30} />
      <circle className={classes.dot} cx={170} cy={110} r={12} />
    </svg>
  );
};
