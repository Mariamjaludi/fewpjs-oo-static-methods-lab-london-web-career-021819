class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str){
    return str.replace(/[^a-z0-9-''\s]/gi, '')
  }
  static titleize(str){
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const result = str.split(' ').map( (word) => {
      if (exceptions.includes(word)){
        return word
      }
      else {
        return Formatter.capitalize(word)
      }
    }).join(' ')
    return result.charAt(0).toUpperCase() + result.slice(1);
  }


}
