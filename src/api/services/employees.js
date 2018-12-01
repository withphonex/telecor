import axios from 'axios';


class Employee {
  constructor(baseURL = 'https://sample.com'){
    this.api = axios.create({ baseURL, timeout: 15000 });
  }
}

const employee = new Employee();

export { employee }

