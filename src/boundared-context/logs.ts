import { Colors, TypeError } from "../shared/consts/global";

export const logs = [
    {
        key: "error",
        color: Colors.Red,
        name: TypeError.Error,
    },
    {
        key: "warn",
        color: Colors.Yellow,
        name: TypeError.Warn,
    },
    {
        key: "info",
        color: Colors.Cyan,
        name: TypeError.Info,
    },
    {
        key: "debug",
        color: Colors.Green,
        name: TypeError.Debug,
    },
    {
        key: "log",
        color: Colors.White,
        name: TypeError.Log,
    },
]