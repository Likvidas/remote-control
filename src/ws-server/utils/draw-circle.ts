import { mouse, Button, Point, straightTo } from '@nut-tree/nut-js';

export const drawCircle = async (radius: number) => {
  const { x, y } = await mouse.getPosition();
  await mouse.pressButton(Button.LEFT);

  for (let i = 0; i <= Math.PI * 2; i += 0.05) {
    const positionX = x - radius * Math.cos(i) + radius;
    const positionY = y - radius * Math.sin(i);
    const target = new Point(positionX, positionY);
    await mouse.drag(straightTo(target));
  }

  await mouse.releaseButton(Button.LEFT);
};
