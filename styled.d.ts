import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    // refactor add styles to theme
    colors: any;
  }
}
