angular.module('services', []);
angular.module('controllers', []);
angular.module('directives', []);

angular.module('angularSeed', ['ng-contentful', 'ngRoute', 'Aerobatic', 'services', 'controllers', 'directives', 'templates'])
  .config(function (contentfulClientProvider, $routeProvider, $locationProvider, $sceDelegateProvider, aerobaticProvider) {
    
    //Contentful keys @@CONTENTFUL_SPACE_ID@@, @@CONTENTFUL_ACCESS_TOKEN@@
    contentfulClientProvider.setSpaceId('4e35fmb7h0wc');
    contentfulClientProvider.setAccessToken('781cab06347866520ca49c33bc11e067c90ad615a2c32c747c29c4ebabbfe7c8');
    
    // Use html5 pushState for route navigation
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        controller: 'IndexCtrl',
        // The templates have already been pre-cached so no network call is incurred
        templateUrl: aerobaticProvider.templateUrl('partials/index.html')
      })
      .otherwise({redirectTo: '/'});
  })
  .run(function(ContentTypeList, contentfulClient, $rootScope){
    ContentTypeList.loadAllContentTypes();
    contentfulClient.entries().then(function(entries){
      $rootScope.entries = entries;
    });
  })
