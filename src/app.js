function log(input) {
  console.log(input);
}

const pronoun = ["my", "your", "his", "her", "our", "their"];
const adj = ["awesome", "amazing", "wonderful", "beautiful", "fantastic", "splendid", "maravellous", "incredible"];
const noun = ["website", "business", "webpage", "idea", "blog", "onlineshop", "mafia-ring"]; 
const extensions = [".com", ".co.uk", ".es", ".org", ".net"];

for(let partOne of pronoun) {
  let currentPronoun = partOne; 
  
  for(let partTwo of adj) {
    let currentAdj = partTwo;

    for(let partThree of noun) {
      let currentNoun = partThree;
    
      for(let partFour of extensions) {
        let currentExt = partFour;

        let domain = `${currentPronoun}${currentAdj}${currentNoun}${currentExt}`;
        log(domain);
      }
    }
  }
} 

