module.export = {

  phrase: "This phrase will be converted into piglatin, please insert your phrase here.",

  letsPig: function (str) {
    str = str.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var wordArr = str.split(' ');

    var pigLatinator = function (word, index, array) {
      switch (true) {
        case /^[aeiouAEIOU]/.test(word):
          return word + "ay";
        case /^[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/.test(word):
          var consonants = '';
          var counter;
          for (var i = 0; i < word.length; i++) {
            if (/[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/.test(word.charAt(i))) {
              consonants += word.charAt(i);
              counter++;
              console.log(consonants);
            } else {
              break;
            }
          }
          pigWord = word.substring(consonants.length, word.length) + '-' + consonants + 'ay';
          return pigWord;
      }
    };

    var pigArr = wordArr.map(pigLatinator);

    str = pigArr.join(' ') + '.';

    return str;
  },

  letsUnPig: function (str) {
    str = str.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var wordArr = str.split(' ');

    var unPigLatinator = function (word, index, array) {
      switch (true) {
        case /^[aeiouAEIOU]/.test(word):
          return word + "ay";
        case /^[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/.test(word):
          var consonants = '';
          var counter;
          for (var i = 0; i < word.length; i++) {
            if (/[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/.test(word.charAt(i))) {
              consonants += word.charAt(i);
              counter++;
              console.log(consonants);
            } else {
              break;
            }
          }
          pigWord = word.substring(consonants.length, word.length) + '-' + consonants + 'ay';
          return pigWord;
      }
    };

    var pigArr = wordArr.map(pigLatinator);

    str = pigArr.join(' ') + '.';

    return str;
  }

};

