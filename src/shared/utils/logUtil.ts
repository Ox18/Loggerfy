import { generateTimestamp } from "./dateUtil";

export const outputCustomized = (message: string, colorFont: string, typeLogger: string, typeOutput: string): void => console.log(colorFont, `[${generateTimestamp()}] [${typeLogger}] ${message}`, typeOutput);
