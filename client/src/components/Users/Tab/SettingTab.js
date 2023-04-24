import styled from 'styled-components';
import Tabs from './SettingTab/Tabs';

const SettingSection = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

function SettingTab() {
  return (
    <SettingSection>
      <Tabs />
    </SettingSection>
  );
}

export default SettingTab;
