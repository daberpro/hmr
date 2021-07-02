Keterangan simbol:
- simbol 1:1:1 berarti angka yang pertama merupakan flow sedangkan angka yang kedua merupakan syntax pertama yang harus di buat, sedangkan angka yang ke tiga merupakan child atau anak code, jika terdapat lebih dari 3 angka untuk simbol tersebut maka itu adalah child seterusnya

# Target

membuat penerapan implementasi hmr ( hot module replacement )
untuk mode developing, untuk web browser

Teknologi yang di gunakan
- socket.io
- expressjs
- nodemon
- jsonwebtoken

flow pengerjaan:
    1 membuat module replacement ( frontend )
    2 membuat manajemen file ( backend )
    3 membuat system bundler nya ( backend )
    4 membuat socket connection ( backend & frontend )
    5 membuat system autentikasi ( backend & frontend )
    6 membuat handling error ( frontend )

child pengerjaan:
    1:1 membuat class Replacement ( frontend )
    1:1:0 membuat variabel untuk menyimpan bundle script
    1:1:1 mengambil client socket dari frontend module
    1:1:2 membuat fungsi yang menghandle data dari socket
    1:1:3 membuat handling error untuk socket
    1:1:4 membuat fungsi replace dari data yang di terima dari socket
    1:1:5 setelah itu mengirim feed back ke server

    2:1 mengimport / me require file system ( fs )
    2:2 membuat fungsi manageStreamFile ( backend )
    2:2:0 membuat variabel yang akan menampung nilai:
        - path / lokasi file 
        - data dari file
        - fungsi read file
        - fungsi event get file
        - fungsi event delete file
        - fungsi event check file
        - fungsi event update file
        - konfigurasi untuk manage file
    2:2:1 membuat constructor untuk meng set parameter / argumen sesuai dengan variabel yang akan di isi oleh path dan nama file
    2:2:2 membuat fungsi untuk meng handle event
    2:2:3 membuat fungsi untuk meng handle error

    4:1 import / require (socket.io, express) ( backend & frontend )
    4:2 membuat class Socket
    4:2:0 set variabel:
        - name server
        - port server
        - callback onConnect / event connect
        - callback onDisconnect / event disconnect
        - konfigurasi untuk socket
    4:2:1 fungsi ketika diskonek 
    4:2:2 fungsi ketika konek
    4:2:3 fungsi ketika error 

    5:1 membuat env file
    5:2 import module dotenv
    5:3 membuat fungsi yang meng assign username & pw dengan secret key dari env file

    6:1 membuat class HandlingError extends Error

# rule
1. nama file harus sesuai dengan nama dari code yang ada di dalam nya
2. dalam satu file jika terdapat hanya satu buah fungsi / class / object maka nama file harus sesuai dengan nama fungsi / class tersebut
3. jika dalam satu file terdapat lebih dari satu class / object / fungsi maka penamaan dari file tersebut harus sesuai dengan mayoritas jenis dari kodenya seperti penjumlahan dan pengurangan maka nama filenya matematika.js
4. penulisan nama variabel harus menyatakan isi dari variabel itu sendiri, contoh: const buah = "apel"
5. nama fungsi / variabel jika memiliki lebih dari satu kalimat maka menggunakan camelcase, contoh: const namaOrang;
6. nama fungsi harus me representasikan return valuenya
7. argumen yang ada di dalam fungsi / parameter harus memiliki nama yang jelas
8. suatu file hanya boleh 600 line isinya
9. jika suatu code memiliki terlalu banyak fungsi yang besar, maka fungsi yang besar itu harus di buat di file yang berbeda
10. jika suatu file memiliki Target platform yang berbeda ( node / browser ) maka file tersebut harus di gabungkan didalam folder yang sejenis isinya
11. suatu fungsi / class hanya bisa menghandle satu tugas, contoh: fungsi matematika hanya bisa menghandle perhitungan