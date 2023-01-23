import 'dotenv/config';
import { env } from 'process';
import { httpServer } from './http_server';
import { wsServer } from './ws_server';

const HTTP_PORT = Number(env.HTTP_PORT) ?? 8181;
const WS_PORT = Number(env.WS_PORT) ?? 8080;

console.log(`Start static http server at http://127.0.0.1:${HTTP_PORT}`);
httpServer.listen(HTTP_PORT);

wsServer(WS_PORT);
