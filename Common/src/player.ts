
export class Player {

    public name: string;
    public color: string;
    public socketId: any;
    public connected: boolean;

    constructor(playerName: string, playerColor: string, socketId: any)
    {
        this.name = playerName;
        this.color = playerColor;
        this.socketId = socketId;
        this.connected = true;
    }

    public SetConnected(connected: boolean)
    {
        this.connected = connected;
    }
}