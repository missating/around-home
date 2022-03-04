import React, { useEffect, useState } from 'react';

import { getCompanyList } from 'data/companyList';

import CompanyCard from 'modules/CompanyCard';

const CompanyList = () => {
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    getCompanyList().then(companies => {
      setCompanyList(companies)
    });
  }, []);


  console.log(companyList)

  return (
    <div>
      text
      <CompanyCard />
    </div>
  )
};

export default CompanyList;
