import { cpus } from 'os';

export const sayHello = () => console.log(`Hello my dear friend. Your machine has CPU Cores - ${cpus().length}`);
