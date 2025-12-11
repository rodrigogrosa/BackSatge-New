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
import LightIcon from '@material-ui/icons/WbSunny';
import { AppTheme } from '@backstage/core-plugin-api';
import {
  UnifiedThemeProvider,
  createUnifiedTheme,
  palettes,
  pageTheme as defaultPageThemes,
  genPageTheme,
} from '@backstage/theme';

const PRIMARY_RED = '#e32726';
const SECONDARY_RED = '#b31818';
const FONT_COLOR = '#ffffff';

const palette = {
  ...palettes.light,
  primary: {
    ...palettes.light.primary,
    main: PRIMARY_RED,
    contrastText: FONT_COLOR,
  },
  secondary: {
    main: SECONDARY_RED,
    contrastText: FONT_COLOR,
  },
  link: PRIMARY_RED,
  linkHover: '#ff5e5e',
  bursts: {
    ...palettes.light.bursts,
    backgroundColor: { default: PRIMARY_RED },
    gradient: {
      linear: `linear-gradient(-137deg, ${PRIMARY_RED} 0%, ${SECONDARY_RED} 100%)`,
    },
  },
  navigation: {
    ...palettes.light.navigation,
    indicator: PRIMARY_RED,
    selectedColor: FONT_COLOR,
  },
  banner: {
    ...palettes.light.banner,
    info: PRIMARY_RED,
    error: PRIMARY_RED,
    link: FONT_COLOR,
  },
};

const pageThemes = Object.fromEntries(
  Object.entries(defaultPageThemes).map(([id, theme]) => [
    id,
    genPageTheme({
      colors: [PRIMARY_RED, SECONDARY_RED],
      shape: theme.shape,
      options: { fontColor: FONT_COLOR },
    }),
  ]),
);

const claroUnifiedTheme = createUnifiedTheme({
  palette,
  pageTheme: pageThemes,
  defaultPageTheme: 'home',
});

export const onemindTheme: AppTheme = {
  id: 'onemind-light',
  title: 'Claro OneMind',
  variant: 'light',
  icon: <LightIcon />,
  Provider: ({ children }) => (
    <UnifiedThemeProvider theme={claroUnifiedTheme}>
      {children}
    </UnifiedThemeProvider>
  ),
};
