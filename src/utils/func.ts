export const onClickAbout = (e: any, name: string): void => {
  e.preventDefault();
  let scrolling: any;
  scrolling = document.getElementById(name);
  scrolling.scrollIntoView();
};
