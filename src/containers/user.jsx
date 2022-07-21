import React from 'react';
import {
  Box,
  chakra,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Container,
  Flex,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import EventsTab from '../components/user/events-tab';
import CarsTab from '../components/user/cars-tab';
import ServicesTab from '../components/user/services-tab';
import UserInfoTab from '../components/user/user-info-tab';

function UserContainer() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Box padding={"10px"}>
      <Tabs  variant='enclosed' colorScheme='green'>
        <TabList>
          <Button onClick={handleBack}>Go back</Button>
          <Tab>User Info</Tab>
          <Tab>Cars</Tab>
          <Tab>Services</Tab>
          <Tab>Events</Tab>
        </TabList>
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
