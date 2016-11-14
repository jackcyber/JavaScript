function myConcat(separator){
  result = "";
  for (var i = 1; i < arguments.length; i++){
    result += arguments[i] + separator;
  }
  return result;
}

var myStr = myConcat('; ', 'Gibson', 'Harson', 'Larrson', 'Johnson', 'Jackson', 'Thompson', 'Watterson');
console.log(myStr);