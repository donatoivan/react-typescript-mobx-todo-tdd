import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      orangeyPink: string;
      grey: string;
      white: string;
      titleGrey: string;
    };
  }
}
