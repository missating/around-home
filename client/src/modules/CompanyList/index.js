import { useEffect, useState } from 'react';

import { Row, Col } from 'components/Grid';
import Box from 'components/Box';

import CompanyCard from 'modules/CompanyCard';

const CompanyList = () => {
  const [companyList, setCompanyList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/companies')
      .then(response => response.json())
      .then(data => {
        setCompanyList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (loading) {
    return null;
  };

  return (
    <Row>
      {companyList.map((company) => (
        <Col sm={12} md={6} xl={4} key={company.id}>
          <Box mb="md">
            <CompanyCard
              id={company.id}
              name={company.name}
              timeSlots={company.time_slots}
            />
          </Box>
        </Col>
      ))}
    </Row>
  )
};

export default CompanyList;
