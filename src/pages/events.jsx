import React from 'react';
import SidebarWrapper from '../components/sidebar-wrapper';
import EventsContainer from '../containers/events';

const EventsPage = (props) => {
  return (
    <SidebarWrapper>
      <h2>Events</h2>
      <EventsContainer />
    </SidebarWrapper>
  );
};

export default EventsPage;
