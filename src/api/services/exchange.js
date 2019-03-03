import axios from 'axios';
import log from '../../logger';

const { FIXER_API_URL, FIXER_API_KEY } = process.env;
const api = axios.create({
  baseURL: FIXER_API_URL,
  timeout: 150000,
  params: { access_key: FIXER_API_KEY }
});

export async function getRates({ from = 'USD', to: currencies='' }) {
  try {
    const rates = await api.get('live', { currencies });
    return rates.data;
  } catch (err) {
    log.error(err);
    return err;
  }
}


export async function convert({from='USD', to, amount}){
  try {
    const rates = await getRates({ from, to })
    const rate = rates.quotes[`${from}${to}`];
    return amount / rate;
  } catch(err){
    return -1;
  }
}


