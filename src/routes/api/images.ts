import express from 'express';
import resizeImage from '../../utilities/resizeImage';
import path from 'path';
import fs, { existsSync } from 'fs';

const images = express.Router();

images.get('/',async (req: express.Request, res: express.Response): Promise<void> => {
    const height = parseInt(req.query.height as string);
    const width = parseInt(req.query.width as string);
    const filename = req.query.filename as string;

    const sourceFile = path.join(__dirname, '../../../images/full', `/${filename}.jpg`);
    const cachePath = path.join(__dirname, '../../../images/resFiles', `${filename}${width}&${height}.jpg`);

    //2 Invalid input for filename e.g. fjord123.
    
    try {
      if(fs.existsSync(sourceFile)){;
      console.log('file or directory exists');
    }else{
        res.send('file or directory does not exist');
    }
    } catch (err) {
      console.log('catch block error');     
    }
    
    //Missing filename, height or width.
    
    if(!filename || !width || !height){
        res.status(400).send("please provide filename, width and height");
    }
    
    
    //Invalid input for height or width e.g. height=a, height=0 or height=-1.
   
    if(width <= 0 || height <= 0){
        res.status(400).send('invalid input for height and width');
    }
    

    if (existsSync(cachePath)) {
      res.sendFile(cachePath);
    } else {
      try {
        await resizeImage(filename, width, height);
        res.status(200).sendFile(cachePath);
      } catch (err) {
        res.status(500).send('Please provide a valid image file');
      }
    }
  }
);

export default images;
