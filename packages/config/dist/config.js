export const IP_ADDRESS = "192.168.1.35";
let HOST;
if (!IP_ADDRESS) {
    console.log("IP_ADDRESS is not set. Using localhost");
    HOST = "localhost";
}
else {
    HOST = IP_ADDRESS;
}
export const config = {
    MANAGER_BACKEND_PORT: 3001,
    MANAGER_FRONTEND_PORT: 5001,
    DEV_TOOLS_BACKEND_PORT: 3002,
    DEV_TOOLS_FRONTEND_PORT: 5002,
    TANGO_BACKEND_MANAGER_PORT: 3003,
    FRIDA_SERVER: 3004,
    MANAGER_BACKEND_URL: `http://${HOST}:3001`,
    MANAGER_FRONTEND_URL: `http://${HOST}:5001`,
    DEV_TOOLS_BACKEND_URL: `http://${HOST}:3002`,
    DEV_TOOLS_FRONTEND_URL: `http://${HOST}:5002`,
    TANGO_BACKEND_MANAGER_URL: `http://${HOST}:3003`,
    FRIDA_SERVER_URL: `http://${HOST}:3004`,
};
