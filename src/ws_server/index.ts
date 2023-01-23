import { WebSocketServer } from 'ws';

export const wsServer = (port: number) => {
  const ws = new WebSocketServer({ port });

  ws.on('listening', () => console.log(`WebSocket Server started at http://127.0.0.1:${port}`));

  ws.on('close', () => console.log('WebSocket Server stoped'));

  ws.on('connection', () => console.log('someone connected!'));

  return ws;
};
