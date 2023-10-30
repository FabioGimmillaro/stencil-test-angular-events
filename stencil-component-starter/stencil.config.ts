import { Config } from '@stencil/core';
import { angularOutputTarget } from "@stencil/angular-output-target";

export const config: Config = {
  namespace: 'test-angular-events',
  outputTargets: [
    {
      type: 'dist',
    },
    angularOutputTarget({
      componentCorePackage: 'test-angular-events',
      outputType: 'component',
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
