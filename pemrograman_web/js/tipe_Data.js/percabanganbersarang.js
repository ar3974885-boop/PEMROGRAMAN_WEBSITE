let hari = "senin ";

switch (hari) {
    case "Senin":
        console.log("Hari kerja di mulai!");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Waktu liburan!");
        break;
    default:
        console.log("Hari biasa.");
}