import styled from 'styled-components';

const styledSpin = (spin) => (styled(spin)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);`
);

export default styledSpin;
