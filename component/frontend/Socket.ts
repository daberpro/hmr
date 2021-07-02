// membuat class socket ( 4:2 )
class Socket {
    
    // deklarasi name host
    private name: string = "localhost"
    
    // deklarasi port
    private port: number = 3000
    
    // deklarasi method on connect
    public onConnect: Function = () => {}
    
    // deklarasi method on disconnect
    public onDisconnect: Function = () => {}

    constructor(socket: any, name: string, port: number) {
        this.onConnect = socket
        this.name = name
        this.port = port

        
    }

}