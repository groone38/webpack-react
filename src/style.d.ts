// declare module "*.module.css";
// declare module "*.module.scss";

declare module "*.scss" {
  interface IClassName {
    [className: string]: string;
  }
  const className: IClassName;
  export = className;
}
