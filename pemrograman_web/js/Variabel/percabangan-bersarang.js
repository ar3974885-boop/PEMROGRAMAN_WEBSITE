const sudahLogin = true;
const role = "admin";

if (sudahLogin) {
    if (role === "admin") {
        console.log ("Selamat datang di halaman admin." );
    } else{
        console.log ("Selamat datang di halaman pengguna.");
    }
} else{
    console.log ("Silahkan login terlebih dahulu.");
}
