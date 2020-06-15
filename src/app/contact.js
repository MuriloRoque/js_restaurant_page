const createContact = () => {
  const ELEMENT = document.getElementById('contact');
  const HEADING = document.createElement('h1');
  const INFO = document.createElement('ul');
  const EMAIL = document.createElement('li');
  const PHONE = document.createElement('li');
  const ADDRESS = document.createElement('li');
  ELEMENT.appendChild(HEADING);
  ELEMENT.appendChild(INFO);
  INFO.appendChild(EMAIL);
  INFO.appendChild(PHONE);
  INFO.appendChild(ADDRESS);
  HEADING.textContent = 'Contact us:';
  EMAIL.textContent = 'Send the restaurant an e-mail: muriloengqui@gmail.com';
  PHONE.textContent = 'Call the restaurant: +55 16 99356 2451';
  ADDRESS.textContent = 'Visit us: 7059 North Bayberry St. Corpus Christi, TX 78418';
};
export default createContact;