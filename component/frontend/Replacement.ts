import { HandlingError } from "./HandlingError";
import { BundleData, errorHandle } from "./Interface";

// membuat class Replacement ( 1:1 )
export class Replacement {
    // mendeklarasikan bundle untuk script ( 1:1:0 )
    private bundle: BundleData = {
        date: "",
        syntax: "",
        getSyntax: () => {},
        uuid: ""
    }
    
    // mendeklarasikan socket
    private socket: any
    
    constructor(Socket: any) {
        // set nilai socket dengan parameter Socket
        this.socket = Socket
    }
    
    // membuat fungsi untuk mengambil client socket ( 1:1:1 )

    // membuat fungsi untuk menghandle data dari socket ( 1:1:2 )
    public dataHandle(): void {
        
        // membuat tag script untuk menyimpan script bundle
        let script = document.createElement("script")

        // mengambil data dari fungsi client socket
        let {
            date,
            syntax,
            getSyntax,
            uuid
        } = this.bundle

        // mengset syntax kedalam variabel script
        script.textContent = getSyntax()
        
        // memasukan script ke tag body
        document.body.appendChild(script)

    }

    public errorHandling(args: errorHandle): void {

        const { getSyntax, date, uuid }: BundleData = this.bundle
        // jika bundle script error
        try {
            
            eval(getSyntax())
            
        } catch ({ message }) {

            const callback = ({ message, uuid }: any) => {
                document.write(`Message: ${message}<br/>Error type: ${uuid}`)
            }

            // memasukan error
            const error = new HandlingError({ type: "error", platform: "browser", date, uuid, callback, message  })
            error.getError()
            
        }

    }
}