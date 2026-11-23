import {
  withNativeFederation,
  fromPackageJson,
} from '@angular-architects/native-federation/config';

export default withNativeFederation({
  name: 'mfe1',

  exposes: {
    './Component': './projects/mfe1/src/app/app.ts',
  },

  shared: fromPackageJson({
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
    build: 'package',
  }).patch(['@angular/*'], { includeSecondaries: { keepAll: true } }),

  skip: ['rxjs/ajax', 'rxjs/fetch', 'rxjs/testing', 'rxjs/webSocket'],

  features: {
    denseChunking: true,
    denseExternals: true,
    strictImports: false,
  },
});
