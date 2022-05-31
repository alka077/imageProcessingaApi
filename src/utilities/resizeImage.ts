import sharp from 'sharp';

const resizeImage = async (filename: string, width: number, height: number): Promise<string | undefined> => {
    try{
    const inputPath = './images/full/'+filename+'.jpg';
    //console.log(inputPath);
    const outPath ='./images/resFiles/'+filename + width +'&' + height + '.jpg';
    //console.log(outPath);
    
        await sharp(inputPath).resize(width, height).toFile(outPath);
        console.log("image have been resized");
    return outPath;
      }catch(err){
        console.log(err);
    }
    
};
   
    
export default resizeImage;
    
 
