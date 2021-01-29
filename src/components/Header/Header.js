import React from 'react';
import {
  HeaderContainer, HeaderItem, StyledSpan, SettingsIcon,
} from './HeaderStyles';

const HeaderComponent = () => (
  <HeaderContainer>
    <div>
      <HeaderItem>
        <StyledSpan>
          company name
        </StyledSpan>
      </HeaderItem>
    </div>
    <div>
      <HeaderItem>
        <StyledSpan>
          admin@mail.com
          <SettingsIcon type="setting" />
        </StyledSpan>
      </HeaderItem>
    </div>
  </HeaderContainer>
);
export default HeaderComponent;
