import React, { useEffect, useState } from 'react';

import { Row, Col } from 'components/Grid';
import Box from 'components/Box';

import { getCompanyList } from 'data/companyList';

import CompanyCard from 'modules/CompanyCard';

const CompanyList = () => {
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    getCompanyList().then(companies => {
      setCompanyList(companies)
    });
  }, []);

  return (
    <Row>
      {companyList.map((company) => (
        <Col sm={12} md={6} xl={4} key={company.id}>
          <Box mb="md">
            <CompanyCard
              {...company}
            />
          </Box>
        </Col>
      ))}
    </Row>
  )
};

export default CompanyList;
