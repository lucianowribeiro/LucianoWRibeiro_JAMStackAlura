import { css } from 'styled-components';
import theme from '../index';

export default function breakpointsMedia(cssByBreakpoint) {
  const breakpointNames = Object.keys(theme.breakpoints);
  return breakpointNames
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map((breakpointName) => css`
    @media only screen and (min-width: ${theme.breakpoints[breakpointName]}px) {
      ${cssByBreakpoint[breakpointName]}
    }
  `);
}
