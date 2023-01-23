import { WebSocket, createWebSocketStream } from 'ws';
import { mouse, up, down, left, right } from '@nut-tree/nut-js';
import { Commands } from './handler-connection.types';
import { drawCircle, drawRectangle } from '../utils';

export const handleWsConnection = async (ws: WebSocket) => {
  const wsStream = createWebSocketStream(ws, {
    encoding: 'utf8',
    decodeStrings: false,
  });

  wsStream.on('data', async (chunk: Buffer) => {
    const [command, mainValue, additionalValue] = chunk.toString().split(' ');

    switch (command) {
      case Commands.MouseUp: {
        await mouse.move(up(Number(mainValue)));
        wsStream.write(`${command}_${mainValue}`);
        break;
      }
      case Commands.MouseDown: {
        await mouse.move(down(Number(mainValue)));
        wsStream.write(`${command}_${mainValue}`);
        break;
      }
      case Commands.MouseLeft: {
        await mouse.move(left(Number(mainValue)));
        wsStream.write(`${command}_${mainValue}`);
        break;
      }
      case Commands.MouseRight: {
        await mouse.move(right(Number(mainValue)));
        wsStream.write(`${command}_${mainValue}`);
        break;
      }
      case Commands.MousePosition: {
        const { x, y } = await mouse.getPosition();
        wsStream.write(`${command} ${x}, ${y}`);
        break;
      }
      case Commands.DrawCircle: {
        drawCircle(Number(mainValue));
        wsStream.write(`${command}_${mainValue}`);
        break;
      }
      case Commands.DrawRectangle: {
        drawRectangle(Number(mainValue), Number(additionalValue));
        wsStream.write(`${command}_${mainValue}_${additionalValue}`);
        break;
      }
      case Commands.DrawSquare: {
        drawRectangle(Number(mainValue));
        wsStream.write(`${command}_${mainValue}`);
        break;
      }
      default: {
        console.log(`Command - ${command} not found`);
        wsStream.write(`Command - ${command} not found`);
        break;
      }
    }
  });
};
