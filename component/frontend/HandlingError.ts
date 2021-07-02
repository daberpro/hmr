import { errorHandle } from "./Interface"

const log = console.log

// membuat class HandlingError ( 6:1 )
export class HandlingError {
    
    // mendeklarasikan config
    private config: errorHandle
    
    constructor(config: errorHandle) {
        this.config = config
    }

    
    // membuat fungsi get error
    public getError(): void {
        
        // mengambil config
        let { platform } = this.config

        if (platform === "node") {
            this.nodeError(this.config)
        } 
        
        if (platform === "browser") {
            this.browserError(this.config)
        }
        
    }

    // membuat method untuk handle error di backend
    public nodeError({ uuid, message, callback, type, date }: any) {
       const chalk = require("chalk")

        // log text message
        log(chalk.hex("#ff471a")(`| message type: ${chalk.hex(type === "warning" ? "#ff3300" : "#cc0000")(type)}`))
        log(chalk.hex("#fff")(`| message: ${message}\nmessage ID ${uuid}\ntime: ${date}`))
        
        // check callback jika ada dan merupakan fungsi
        if (callback instanceof Function) {
            callback({ message, uuid })
        }

    }

    //  membuat method untuk handle error di frontend
    public browserError({ uuid, message, callback, type, date }: any) {

        // log text message
        type === "error" ? console.error(`| message type: ${type}\nmessage: ${message}\nuuid: ${uuid}\ntime: ${date}`) : console.warn(`| message type: ${type}\nmessage: ${message}\nuuid: ${uuid}\ntime: ${date}`)

        // check callback jika ada dan merupakan fungsi
        if (callback instanceof Function) {
            callback({ message, uuid })
        }

    }

}
