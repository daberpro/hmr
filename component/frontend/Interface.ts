// bentuk data yang di ambil dari socket
export interface BundleData {
    date: string,
    syntax: string,
    getSyntax: Function,
    uuid: string
}

// bentuk konfigurasi error handler
export interface errorHandle {
    type: string,
    date: string,
    uuid: string,
    message: string,
    callback: Function,
    platform: string
}