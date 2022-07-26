import React from 'react';
import {
  Box,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import EventsTab from '../components/user/events-tab';
import CarsTab from '../components/user/cars-tab';
import ServicesTab from '../components/user/services-tab';
import UserInfoTab from '../components/user/user-info-tab';
import Navbar from '../components/navbar';

function UserContainer() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Box padding={'10px'}>
      <Tabs variant='enclosed' colorScheme='green'>
        <Navbar>
          <TabList>
            <Tab>User Info</Tab>
            <Tab>Cars</Tab>
            <Tab>Services</Tab>
            <Tab>Events</Tab>
          </TabList>
        </Navbar>
        <TabPanels>
          <TabPanel>
            <UserInfoTab />
          </TabPanel>
          <TabPanel>
            <CarsTab />
          </TabPanel>
          <TabPanel>
            <ServicesTab />
          </TabPanel>
          <TabPanel>
            <EventsTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default UserContainer;
