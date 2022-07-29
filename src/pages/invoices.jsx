import React from 'react';
import SidebarWrapper from '../components/sidebar-wrapper';
import InvoicesContainer from '../containers/invoices';

const InvoicesPage = (props) => {
  return (
    <SidebarWrapper>
      <h2>Invoices</h2>
      <InvoicesContainer />
    </SidebarWrapper>
  );
};

export default InvoicesPage;
