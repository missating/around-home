import React from 'react';
import CompanyList from  'modules/CompanyList';

import { Container } from 'components/Grid';
import Box from 'components/Box';

const Companies = () => {
  return (
    <Container>
      <Box textAlign="center">
        <h1>Book your resevations</h1>
      </Box>
      <CompanyList />
    </Container>
  );
};

export default Companies;
