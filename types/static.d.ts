/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

/* CSS MODULES */
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.styl' {
  const classes: { [key: string]: string };
  export default classes;
}

/* CSS */
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';
declare module '*.styl';

/* IMAGES */
declare module '*.svg' {
  const reference: string;
  export default reference;
}
declare module '*.bmp' {
  const reference: string;
  export default reference;
}
declare module '*.gif' {
  const reference: string;
  export default reference;
}
declare module '*.jpg' {
  const reference: string;
  export default reference;
}
declare module '*.jpeg' {
  const reference: string;
  export default reference;
}
declare module '*.png' {
  const reference: string;
  export default reference;
}

/* CUSTOM: ADD YOUR OWN HERE */
