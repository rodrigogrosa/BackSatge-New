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

import { PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import HomeIcon from '@material-ui/icons/Home';
import CreateComponentIcon from '@material-ui/icons/AddCircleOutline';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import LogoFull from './LogoFull';
import LogoIcon from './LogoIcon';
import {
  Settings as SidebarSettings,
  UserSettingsSignInAvatar,
} from '@backstage/plugin-user-settings';
import { SidebarSearchModal } from '@backstage/plugin-search';
import {
  Link,
  Sidebar,
  sidebarConfig,
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarPage,
  SidebarScrollWrapper,
  SidebarSpace,
  SidebarSubmenu,
  SidebarSubmenuItem,
  useSidebarOpenState,
} from '@backstage/core-components';
import { MyGroupsSidebarItem } from '@backstage/plugin-org';
import { SearchModal } from '../search/SearchModal';
import { useApp } from '@backstage/core-plugin-api';
import BuildIcon from '@material-ui/icons/Build';
import { NotificationsSidebarItem } from '@backstage/plugin-notifications';
import UpdateIcon from '@material-ui/icons/Update';
import CategoryIcon from '@material-ui/icons/Category';

const useSidebarLogoStyles = makeStyles({
  root: {
    width: '100%',
    height: 3 * sidebarConfig.logoHeight,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -14,
  },
  linkBase: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  linkExpanded: {
    marginLeft: 24,
    justifyContent: 'flex-start',
  },
  linkCollapsed: {
    marginLeft: 0,
    justifyContent: 'center',
  },
  expandedLogo: {
    maxWidth: '80%',
  },
  collapsedIcon: {
    width: 45,
    height: 35,
  },
});

const SidebarLogo = () => {
  const classes = useSidebarLogoStyles();
  const { isOpen } = useSidebarOpenState();

  return (
    <div className={classes.root}>
      <Link
        to="/"
        underline="none"
        className={clsx(
          classes.linkBase,
          isOpen ? classes.linkExpanded : classes.linkCollapsed,
        )}
        aria-label="Início"
      >
        {isOpen ? (
          <LogoFull className={classes.expandedLogo} />
        ) : (
          <LogoIcon className={classes.collapsedIcon} />
        )}
      </Link>
    </div>
  );
};

export const Root = ({ children }: PropsWithChildren<{}>) => (
  <SidebarPage>
    <Sidebar>
      <SidebarLogo />
      <SidebarGroup label="Busca" icon={<SearchIcon />} to="/search">
        <SidebarSearchModal>
          {({ toggleModal }) => <SearchModal toggleModal={toggleModal} />}
        </SidebarSearchModal>
      </SidebarGroup>
      <SidebarDivider />
      <SidebarGroup label="Menu" icon={<MenuIcon />}>
        {/* Global nav, not org-specific */}
        <SidebarItem icon={HomeIcon} to="home" text="Início" />
        <SidebarItem icon={CategoryIcon} to="/" text="Catálogo">
          <SidebarSubmenu title="Catálogo">
            <SidebarSubmenuItem
              title="Domínios"
              to="catalog?filters[kind]=domain"
              icon={useApp().getSystemIcon('kind:domain')}
            />
            <SidebarSubmenuItem
              title="Sistemas"
              to="catalog?filters[kind]=system"
              icon={useApp().getSystemIcon('kind:system')}
            />
            <SidebarSubmenuItem
              title="Componentes"
              to="catalog?filters[kind]=component"
              icon={useApp().getSystemIcon('kind:component')}
            />
            <SidebarSubmenuItem
              title="APIs"
              to="catalog?filters[kind]=api"
              icon={useApp().getSystemIcon('kind:api')}
            />
            <SidebarDivider />
            <SidebarSubmenuItem
              title="Recursos"
              to="catalog?filters[kind]=resource"
              icon={useApp().getSystemIcon('kind:resource')}
            />
            <SidebarDivider />
            <SidebarSubmenuItem
              title="Grupos"
              to="catalog?filters[kind]=group"
              icon={useApp().getSystemIcon('kind:group')}
            />
            <SidebarSubmenuItem
              title="Usuários"
              to="catalog?filters[kind]=user"
              icon={useApp().getSystemIcon('kind:user')}
            />
          </SidebarSubmenu>
        </SidebarItem>
        <MyGroupsSidebarItem
          singularTitle="Meu Squad"
          pluralTitle="Meus Squads"
          icon={useApp().getSystemIcon('group')!}
        />
        <SidebarItem
          icon={useApp().getSystemIcon('kind:api')!}
          to="api-docs"
          text="APIs"
        />
        <SidebarItem
          icon={useApp().getSystemIcon('docs')!}
          to="docs"
          text="Documentação"
        />
        <SidebarItem icon={CreateComponentIcon} to="create" text="Criar..." />
        {/* End global nav */}
        <SidebarDivider />
        <SidebarScrollWrapper>
          <SidebarItem
            icon={UpdateIcon}
            to="catalog-unprocessed-entities"
            text="Entidades não processadas"
          />
        </SidebarScrollWrapper>
      </SidebarGroup>
      <SidebarSpace />
      <SidebarDivider />
      <NotificationsSidebarItem />
      <SidebarDivider />
      <SidebarGroup
        label="Configurações"
        icon={<UserSettingsSignInAvatar />}
        to="/settings"
      >
        <SidebarSettings />
        <SidebarItem icon={BuildIcon} to="devtools" text="Ferramentas de Dev" />
      </SidebarGroup>
    </Sidebar>
    {children}
  </SidebarPage>
);
