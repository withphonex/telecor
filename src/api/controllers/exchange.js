import {getRates, convert} from '../services/exchange';
import log from '../../logger'


const exchangeRates = async (req, res) => {
  const rates = await getRates({});
  res.json(rates);
}


const exchangeAirtime = async (req, res) => {
  const { amount } = req.body;
  const usd = await convert({to: 'HTG', amount});

  res.json(usd)
}

export default {
  '/': {
    get: {
      action: exchangeRates,
      level: 'public'
    },
    post: {
      action: exchangeAirtime,
      level: 'public'
    }
  }
};
