import supertest from 'supertest';
import app from '../index';
import resizeImage from '../utilities/resizeImage';
import express from 'express';

const request = supertest(app);

describe('check the outpath is equal to the image processed path',()=>{
    const filename ='hello';
    const width = 400;
    const height = 500;
    it('Verify the outpath is same as the processed image path', async ()=>{
        const outputpath = await resizeImage(filename, width, height);
        //var outpath =true;
        expect(outputpath).toEqual('./images/resFiles/hello600&150.jpg');
    });
});

describe('image proccesing responses testin', () => {
  it('server is created without error', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
  it('route is created without error', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
  it('image API moved permanently', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });
  it('image API moved permanently', async () => {
    const response = await request.get(
      '/api/images?fileName=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });
});
