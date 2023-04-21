import styled from 'styled-components';

const SettingSection = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

function SettingTab() {
  return (
    <SettingSection>
      <div>세팅페이지입니다</div>
    </SettingSection>
  );
}

export default SettingTab;
