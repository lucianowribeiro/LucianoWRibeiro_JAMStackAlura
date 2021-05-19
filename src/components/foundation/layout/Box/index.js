import styled from 'styled-components';
import lodash from 'lodash';
import propToStyle from '../../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('position')}
  ${propToStyle('padding')}
  ${propToStyle('paddingLeft')}
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('boxShadow')};
  ${propToStyle('padding')};
  ${propToStyle('listStyle')}
  ${propToStyle('margin')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginRight')}
  ${propToStyle('minHeight')}
  
  ${({ theme, borderRadiusTheme }) => borderRadiusTheme && `border-radius: ${theme.borderRadius}`};
  ${({ theme, backgroundColor }) => backgroundColor && `background-color: ${lodash.get(theme, `colors.${backgroundColor}.color`)}`}
`;
export default Box;
