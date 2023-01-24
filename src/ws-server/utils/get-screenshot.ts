import { screen, Region, mouse } from '@nut-tree/nut-js';
import Jimp from 'jimp';

export const getScreenShot = async () => {
  try {
    const { x, y } = await mouse.getPosition();
    const screenShot = await screen.grabRegion(new Region(x, y, 200, 200));
    const { data, width, height } = await screenShot.toRGB();
    const screenShotJimp = new Jimp({ data, width, height }, (err) => console.error(err));
    const screenShotResult = await screenShotJimp.getBufferAsync(Jimp.MIME_PNG);

    return screenShotResult.toString('base64');
  } catch {
    console.log(
      'When creating a screenshot, an error occurred, there may not be enough space in this area, try moving the cursor and taking a screenshot again',
    );
  }
};
