export const customMediaQuery = (media) => `@media screen and (min-width: ${media}px)`;

const breakpoints = {
  xs: customMediaQuery(0),
  sm: customMediaQuery(480),
  md: customMediaQuery(768),
  lg: customMediaQuery(992),
  xl: customMediaQuery(1200),
};

export default breakpoints;
