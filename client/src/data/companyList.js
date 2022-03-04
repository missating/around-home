export function getCompanyList() {
  return fetch('http://localhost:3000/companies')
    .then(data => data.json())
}
