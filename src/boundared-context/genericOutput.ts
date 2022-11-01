import { TypeOuput } from "../shared/consts/global";
import { outputCustomized } from "../shared/utils/logUtil";
import { MessageLogger } from "./protocols/global";

export const genericOutput = (message: MessageLogger, color: string, type: string) => {

    let contentMessage = message as string;

    if (message instanceof Object) {
        contentMessage = JSON.stringify(message, null, 2);
    }

    if (message instanceof Array) {
        contentMessage = message.map(item => {
            return item.toString();
        }).join("\n");
    }

    if (message instanceof Number) {
        contentMessage = message.toString();
    }

    if (message instanceof String) {
        contentMessage = message.toString();
    }

    if (message instanceof Boolean) {
        contentMessage = message.toString();
    }

    outputCustomized(contentMessage, color, type, TypeOuput.Reset);
}