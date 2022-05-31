import express from 'express';
import resizeImage from '../../utilities/resizeImage';
import path from 'path';
import fs, { existsSync } from 'fs';

const images = express.Router();

images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const height = parseInt(req.query.height as string);
    const width = parseInt(req.query.width as string);
    const filename = req.query.filename as string;

    const sourceFile = path.join(
      __dirname,
      '../../../images/full',
      `/${filename}.jpg`
    );
    const cachePath = path.join(
      __dirname,
      '../../../images/resFiles',
      `${filename}${width}&${height}.jpg`
    );

    
    //Check if the filename has a source folder.

    try {
      if(fs.existsSync(sourceFile)){;
      console.log('file or directory exists');
    }else{
        console.log('file or directory does not exist');
    }
    } catch (err) {
      console.log('catch block error');
        
    }
    //check if cached version exist or not
    if (existsSync(cachePath)) {
      res.sendFile(cachePath);
    } else {
      try {
        await resizeImage(filename, width, height);
        res.sendFile(cachePath);
      } catch (err) {
        res.status(500).send('Please provide a valid image file');
      }
    }
  }
);

export default images;
