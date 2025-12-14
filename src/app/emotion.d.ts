import '@emotion/react';
import { SerializedStyles } from '@emotion/react';

declare module 'react' {
  interface Attributes {
    css?: SerializedStyles | SerializedStyles[] | string | null | undefined | boolean;
  }
}
