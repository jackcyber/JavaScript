function antiVowel(word){
  var vowel = 'aiueoAIUEO';
  word = word.split('');
  for(var i = 0; i < word.length; i++){
    for(x of vowel){
      if(word[i] === x){
        word.splice(i, 1);
      }
    }
  }
  return word.join('');
}

var myVowel = antiVowel('Joko Purwanto');
console.log(myVowel);
