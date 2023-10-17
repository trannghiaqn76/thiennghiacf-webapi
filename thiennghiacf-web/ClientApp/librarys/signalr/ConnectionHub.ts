import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

export const ConnectionHub = async (signalr_url :string) => {
    // const connection = new HubConnectionBuilder()
    //     .withUrl(signalr_url, { accessTokenFactory: () => 
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwYjdlZTJkNC05M2Y5LTQ4MzctYTQ4Yy02M2IxOTdkMWIzN2UiLCJqdGkiOiIzZTM3MmI2Ni03ZTU1LTRkOWMtYTFkZC04OWMzNmExODZmYWYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidHJhbm5naGlhcW43NiIsImV4cCI6MTYyMzY4NDY0NywiaXNzIjoidGhpZW5uZ2hpYWNmIiwiYXVkIjoidGhpZW5uZ2hpYWNmIn0.ANFTRqP1UGvi5Bp_T6CFjJIv4-h9j8lG063CXsUTQmU"
    // })
    const connection = new HubConnectionBuilder()
        .withUrl(signalr_url)
        .configureLogging(LogLevel.Information)
        .build();

    async function start() {
        try {
            await connection.start();
            console.log("SignalR Connected.");
            return connection;
        } catch (err) {
            console.log(err);
            setTimeout(start, 5000);
        }
    };
    connection.onclose(start);
    start();
    return connection;

}
