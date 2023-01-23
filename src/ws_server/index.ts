import { WebSocketServer } from 'ws';
import * as process from 'process';
import { handleWsConnection } from './handlers/handler-connection';

export const wsServer = (port: number) => {
  const ws = new WebSocketServer({ port });

  const handleAppExit = async () => {
    await ws.close();
    process.exit(0);
  };

  ws.on('listening', () => console.log(`WebSocket Server started on the ${port}`));

  ws.on('close', () => console.log('WebSocket Server stoped. Goodbye'));

  ws.on('connection', handleWsConnection);

  process.on('SIGINT', handleAppExit);
  process.on('exit', handleAppExit);

  return ws;
};
