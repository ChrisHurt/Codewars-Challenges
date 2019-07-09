function humanReadable(seconds) {
    var hh, mm, ss;     
    if(seconds >= 3600){
      hh = Math.floor(seconds / 3600).toString();
      if(hh.length == 1){
        hh = "0" + hh;
      }
    } else {
      hh = "00";
    }
    if (seconds >= 60){
      mm =  (Math.floor(seconds / 60) - Math.floor(seconds / 3600)*60).toString();
      if(mm.length == 1){
        mm = "0" + mm;
      }
    } else {
      mm = "00";
    }
    ss = (seconds % 60).toString();
    if(ss.length == 1){
      ss = "0" + ss;
    }
    return hh + ":" + mm + ":" + ss;
  }