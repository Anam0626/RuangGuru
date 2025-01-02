let clockConversion = function (hour, params){
  let result;
  if (hour < 1) {
    return "Hour cannot be under 1";
  } else {
    if (params === "minutes") {
      result = hour * 60;
    } else if (params === "seconds"){
      result = hour * 3600;
    }
  }
  return result;
}  
module.exports = clockConversion;