function timeConversion(s) {
    let schedule = s.substr(-2);
    let time = s.substr(0, 8);
    let arrTime = time.split(":");
    
    if (schedule === "AM") {
        if (arrTime[0] === "12") {
            arrTime[0] = "00";
        }
    } else {
        if (arrTime[0] !== "12") {
           arrTime[0] = parseInt(arrTime[0]) + 12;
        }
    }
    
    return arrTime.join(":");
}
