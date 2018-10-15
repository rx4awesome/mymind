
const loremIpsum = new GenerateNewText();


function GenerateNewText() {
  this.sentences =
    [
      "AHH...Stahhp. I coulda dropped mah croissant",
      "Road work ahead? Uh Yea, I sure hope it does",
       "Happy Crimus....It's crismun...Merry crisis. Merry chrysler",
      "...Hi Welcome to Chili's",
       "HoW dO yOu kNoW wHaT's gOoD fOr mE?", "THAT'S MY OPINIONNN!!!",  
      "It's a avocadooo...thanks",
       "Yo how much money do you have? 69 cents. AYE you know what that means? I don't have enough money for chicken nuggets",
       "Hurricane Katrina? More like Hurricane Tortilla.",
      "Get to Del Taco. They got a new thing called Freesha-- Free-- Freeshavaca do",
      "Mothertrucker dude that hurt like a buttcheek on a stick",
      "Jared can you read number 23 for the class? No I cannot.... What up I'm Jared, I'm 19 and I never f#@%in learned how to read.",
      "I spilled lipstick in your Valentino bag. You spilled- whaghwhha- lipstick in my Valentino White bag?",
      "What's better than this? Guys bein dudes",
      "How'd you get these bumps? ya got eggzma?I got what? You got eggzma?",
     "WHAT ARE THOSEEEEE? THEY are my crocs!",
      "Can I get a waffle? Can I please get a waffle?",
     "Say Coloradoo. I'M A GIRAFFE!",  
      "How much did you pay for that taco? Aight yo you know this boys got his free tacoo",
      "Tweekle Tweekle",
      "I brought you Frankincense. Thank you. I brought you Myrrh. Thank you. Mur-dur. huh...Judas..no!",
       "Sleep? I don't know about sleep...it's summertime. You ain't go to bed? Oh she caught me",  
       "All I wanna tell you is school's not important... Be whatever you wanna be. If you wanna be a dog...RUFF. You know?","Oh I like ya accent where you from? I'm Liberian. Oh, my bad *whispering* I like your accent...",
       "Next Please. Hello. Sir, this is a mug shot. A mug shot? I don't even drink coffee",
        "Hey did you happen to go to class last week? I have never missed a class",
        "Go ahead and introduce yourselves. My name is Michael with a B and I've been afraid of insects my entire-. Stop, stop, stop. Where? Hmm? Where's the B?There's a bee?", 
      "Later mom. What's up me and my boys are going to see Uncle Kracker...GIVE ME MY HAT BACK JORDAN! DO YOU WANNA SEE UNCLE KRACKER OR NO?",
     "Dad look, it's the good kush. This is the dollar store, how good can it be?",
      "Zach stop...Zach stop...You're gonna get in trouble. Zach",
       "CHRIS! Is that a weed? No this is a crayon.-I'm calling the police. *puts 911 into microwave* 911 what's your emergency",
      "*Blowing vape on table* * cameraman blows it away* ADAM!",
      "Would you like the spider in your hand?","Oh hi, thanks for checking in I'm still a piece of garrbaagge",
      "*girl blows vape* ...WoW",
      "*Pours water onto girl's face* Hello?","Wait oh yes wait a minute Mr. Postman... HaaaAHH",
      "It is Wednesday my dudes.",
      "even the babies are one of the most dangerous animals in the world so I built this cage to keep them secure so there's no possible oh my God!",
     "the cheese of truth immigrants cause cancer.",
     "toss me my keys I said my keys! I thought you said printer. Why the #$%@  would I say printer in?",
      "Grahama you gotta get out of car. Why? there's a weight limit.” “why are you running?” “how are you not running?",
      
   ];
}

GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  let minimumCharacterLength = 200;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}


GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];

  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;
