function formatDuration (seconds) {
  if(seconds===0)return 'now'
  let subDivisions = [
    {seconds: 1, name: 'second'},
    {seconds: 60, name: 'minute'},
    {seconds: 3600, name: 'hour'},
    {seconds: 86400, name: 'day'},
    {seconds: 31536000, name: 'year'}
    ];
  let outputString = []; 
  subDivisions.forEach((timeScale, divisonIndex)=>{
    let denominator = timeScale.seconds;
    let modulus = (divisonIndex < subDivisions.length - 1) ? (subDivisions[divisonIndex + 1].seconds/subDivisions[divisonIndex].seconds) : (0);
    let timePeriod;
    if(modulus !== 0){
      timePeriod = Math.round((seconds / denominator) % modulus);
    } else {
      timePeriod = Math.round((seconds / denominator))
    }
    if(timePeriod !== 0)outputString.unshift(`${timePeriod} ${timeScale.name}${timePeriod === 1 ? '' : 's'}`);
    seconds -= timePeriod * denominator;
  });
  if(outputString.length > 1){
    return outputString.slice(0,outputString.length-1).join(', ') + ` and ${outputString[outputString.length - 1]}`;
  } else {
    return outputString[0];
  }
}
