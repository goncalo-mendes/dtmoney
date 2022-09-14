import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      red: string,
      blue: string,
      green: string,
      blueLight: string,

      textTitle: string,
      textBody: string,

      background: string,
      shape: string,
      inputBackground: string,
    }
  }
}
