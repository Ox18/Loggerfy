export type MessageLogger = string | object | Array<any> | number | boolean;

export type Message = (message: MessageLogger) => void;

export type Loggerfy = {
    Error: Message;
    Warn: Message;
    Info: Message;
    Debug: Message;
    Log: Message;
}