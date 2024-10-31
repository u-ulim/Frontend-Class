import { DefaultTheme } from "styled-components";

// delcare는 무엇?
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    accentColor: string;
    btnColor: string;
    cardBgColor: string;
  }
}
