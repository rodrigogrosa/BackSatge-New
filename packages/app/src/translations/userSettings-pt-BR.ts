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
import { createTranslationMessages } from '@backstage/core-plugin-api/alpha';
import { userSettingsTranslationRef } from '@backstage/plugin-user-settings/alpha';

const ptBR = createTranslationMessages({
  ref: userSettingsTranslationRef,
  full: true,
  messages: {
    languageToggle: {
      title: 'Idioma',
      description: 'Altere o idioma',
      select: 'Selecione o idioma {{language}}',
    },
    themeToggle: {
      title: 'Tema',
      description: 'Altere o modo de tema',
      select: 'Selecione {{theme}}',
      selectAuto: 'Selecionar tema automático',
      names: {
        light: 'Claro',
        dark: 'Escuro',
        auto: 'Automático',
      },
    },
    signOutMenu: {
      title: 'Sair',
      moreIconTitle: 'mais',
    },
    pinToggle: {
      title: 'Fixar barra lateral',
      description: 'Impede que a barra lateral recolha',
      switchTitles: {
        unpin: 'Liberar barra lateral',
        pin: 'Fixar barra lateral',
      },
      ariaLabelTitle: 'Alternar fixação da barra lateral',
    },
    identityCard: {
      title: 'Identidade do OneMind',
      noIdentityTitle: 'Sem identidade do OneMind',
      userEntity: 'Entidade de usuário',
      ownershipEntities: 'Entidades de propriedade',
    },
    defaultProviderSettings: {
      description:
        'Fornece autenticação para as APIs e identidades de {{provider}}',
    },
    emptyProviders: {
      title: 'Nenhum provedor de autenticação',
      description:
        'Você pode adicionar provedores de autenticação ao OneMind para usar esses provedores ao se autenticar.',
      action: {
        title: 'Abra o app-config.yaml e faça as alterações destacadas abaixo:',
        readMoreButtonTitle: 'Saiba mais',
      },
    },
    providerSettingsItem: {
      title: {
        signIn: 'Entrar em {{title}}',
        signOut: 'Sair de {{title}}',
      },
      buttonTitle: {
        signIn: 'Entrar',
        signOut: 'Sair',
      },
    },
    authProviders: {
      title: 'Provedores disponíveis',
    },
    defaultSettingsPage: {
      tabsTitle: {
        general: 'Geral',
        authProviders: 'Provedores de autenticação',
        featureFlags: 'Feature Flags',
      },
    },
    featureFlags: {
      title: 'Feature Flags',
      description: 'Atualize a página ao alternar uma feature flag',
      emptyFlags: {
        title: 'Nenhuma feature flag',
        description:
          'Feature flags permitem que plugins registrem recursos no OneMind para os usuários optarem por utilizar. Você pode usar isso para separar lógicas no seu código para testes A/B manuais, etc.',
        action: {
          title: 'Um exemplo de como adicionar uma feature flag está abaixo:',
          readMoreButtonTitle: 'Saiba mais',
        },
      },
      filterTitle: 'Filtro',
      clearFilter: 'Limpar filtro',
      flagItem: {
        title: {
          disable: 'Desativar',
          enable: 'Ativar',
        },
        subtitle: {
          registeredInApplication: 'Registrada no aplicativo',
          registeredInPlugin: 'Registrada no plugin {{pluginId}}',
        },
      },
    },
    settingsLayout: {
      title: 'Configurações',
    },
    sidebarTitle: 'Configurações',
    profileCard: {
      title: 'Perfil',
    },
    appearanceCard: {
      title: 'Aparência',
    },
  },
});

export default ptBR;
