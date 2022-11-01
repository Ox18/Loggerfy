import { genericOutput } from "./genericOutput";
import { logs } from "./logs";
import { Loggerfy } from "./protocols/global";

const loggerfyBuild = () => {
    const app = {} as any;
    logs.forEach((log) => {
        app[log.key] = (message: any) => {
            genericOutput(message, log.color, log.name)
        };
    });
    return app;
}



const loggerfy = loggerfyBuild() as Loggerfy;

export { loggerfy };