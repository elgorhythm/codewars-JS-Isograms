function isIsogram(str){
  
  str = str.toLowerCase()
  
  for (i=0; i<str.length; i++) {
    let char = str[i]
    for (j=0; j<str.length; j++) {
      if (j!==i && char === str[j]) {
        return false
      }
    }    
  }
  return true
}
