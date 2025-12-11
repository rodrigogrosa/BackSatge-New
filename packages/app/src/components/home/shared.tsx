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

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LogoIcon from '../Root/LogoIcon';

export const useLogoStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(5, 0),
  },
  logoWrapper: {
    width: '69%',
  },
}));

const useToolIconStyles = makeStyles({
  icon: {
    width: 38,
    height: 32,
  },
});

const OneMindToolIcon = () => {
  const { icon } = useToolIconStyles();

  return <LogoIcon className={icon} />;
};

export const tools = [
  {
    url: 'https://backstage.io/docs',
    label: 'Documentação',
    icon: <OneMindToolIcon />,
  },
  {
    url: 'https://github.com/backstage/backstage',
    label: 'GitHub',
    icon: <OneMindToolIcon />,
  },
  {
    url: 'https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md',
    label: 'Contribuindo',
    icon: <OneMindToolIcon />,
  },
  {
    url: 'https://backstage.io/plugins',
    label: 'Diretório de plugins',
    icon: <OneMindToolIcon />,
  },
  {
    url: 'https://github.com/backstage/backstage/issues/new/choose',
    label: 'Registrar novo issue',
    icon: <OneMindToolIcon />,
  },
];

export const welcomeCopy = {
  title: 'Bem-vindo ao OneMind',
  subtitle:
    'Descubra serviços, documentações e ferramentas essenciais do seu time em um só lugar',
};

export const HomeWelcomeHero = () => (
  <Box mb={3}>
    <Typography variant="h4" component="h1">
      {welcomeCopy.title}
    </Typography>
    <Typography variant="subtitle1" color="textSecondary" component="p">
      {welcomeCopy.subtitle}
    </Typography>
  </Box>
);
