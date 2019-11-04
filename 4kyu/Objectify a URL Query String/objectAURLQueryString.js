function mergeObjects(obj, src) {
  Object.keys(src).forEach(function(key) {
    if(obj.hasOwnProperty(key)){
      mergeObjects(obj[key],src[key]);
    } else {
      obj[key] = src[key];
    }
  });
  return obj;
}

let mapQueryElement = (element) => {
let valueFound = false;
while(element.length > 0){
  let breakpoint = element.match(/[.&=]/);
  let key;
  let value;
  let callBackString;
  switch(breakpoint[0]){
    case '.':
      key = element.slice(0,element.indexOf('.'));
      callBackString = element.slice(element.indexOf('.')+1);
      let newNestedObj = {}
      newNestedObj[key] =  mapQueryElement( callBackString );
      return newNestedObj;
      break;
    case '=':
      key = element.slice(0,element.indexOf('='));
      value = element.slice(element.indexOf('=')+1);
      let newObj = {}
      newObj[key] = value;
      return newObj;
      break;
  }
}
}

// Converts a URL Query String into an object map
function convertQueryToMap(query) {  
return query.split('&').map(objectAddition=>decodeURIComponent(objectAddition))
                       .reduce((finalObject,objectAddition)=>{
                          let outAddition = mapQueryElement(objectAddition);
                          if(outAddition){
                            finalObject = mergeObjects(finalObject, outAddition);
                          }
                          return finalObject;
                      
                        },{});
}