import express from 'express';
import images from './api/images';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response):void =>{
    res.send('visit site to resize the image http://localhost:3000/api/image?filename=<>&width=<>&height=<>');

});

routes.use('/images', images); //new add

export default routes;
