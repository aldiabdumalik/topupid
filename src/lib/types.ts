type NavigationType = {
  title: string;
  link: string;
  child?: NavigationType[];
};

type HomeShortCutType = {
  title: string;
  url: string;
  img: string;
};

export { type NavigationType, type HomeShortCutType };
