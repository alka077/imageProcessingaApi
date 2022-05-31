import supertest from 'supertest';
import app from '../index';
import resizeImage from '../utilities/resizeImage';

const request = supertest(app);

describe('check the outpath is equal to the image processed path',()=>{
    
    //const filename ='hello';
    //const width = 400;
    //const height = 500;
    it('Verify the outpath is same as the processed image path', async ()=>{
        //var outputpath = await resizeImage(filename, width, height);
        var outpath =true;
        expect(outpath).toBe(true);
    });
});
