import { mouse, Button, right, down, left, up } from '@nut-tree/nut-js';

export const drawRectangle = async (a: number, b: number = a) => {
  await mouse.pressButton(Button.LEFT);
  await mouse.drag(right(a));
  await mouse.drag(down(b));
  await mouse.drag(left(a));
  await mouse.drag(up(b));
  await mouse.releaseButton(Button.LEFT);
};
