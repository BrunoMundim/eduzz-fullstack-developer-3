import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  font-size: 20px;
  width: 100%;
  margin-top: 8px
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 10px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 12px;
  border: 2px solid #ccc;
  padding: 12px;
  user-select: none;
  margin-right: 15px;
  cursor: pointer;
  z-index: 99999;
  background-color: white;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 2px solid white;
    background-color: #eaeaea;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2)
  }

`;
WrapperTabList.tabsRole = "TabList";


export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  box-shadow: 0 0 0.3em #ddd;
  margin-left: 0px;
  display: none;

  &.is-selected {
    display: block;
    margin-top: -10px;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;