import { Config } from 'angular-ecmascript/module-helpers'

import chatsTemplateUrl from '../templates/chats.html'
import tabsTemplateUrl from '../templates/tabs.html'

export default class RoutesConfig extends Config {
    configure() {
        this.$StateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: tabsTemplateUrl,
            })
            .state('tabs.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: chatsTemplateUrl,
                    },
                },
            })

        this.$urlRouterProvider.otherwise('tab/chats')
    }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
