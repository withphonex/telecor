import express from 'express';
import log from '../logger';
import { UserController } from './controllers';

const temp = (req, res) => res.json({status: 'success', msg: 'Method not yet implemented'});
const router = express.Router();

router.map = routes => {
  Object.keys(routes).forEach(path => {
    const route = router.route(path);
    Object.keys(routes[path])
      .forEach(action =>route[action](routes[path][action]) || temp)
  });
}

router.map({
  '/user/:id': {
    get: UserController.findById,
    post: ''
  },
  '/healthcheck': {get: ''}
});

export default router;

