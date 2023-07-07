# 👀👉👉👉 Emoji-Whisperer

Emoji Whisperer 😎😎😎💪🏽 is an npm package that lets you add a touch of fun and expressiveness to your text. This package can interpret the sentiment behind your text and suggest relevant emojis. 🙌

## Installation

```bash
npm install emoji-whisperer
```

## Usage 
The package provides two main methods - whisper and decorate. 🐐

### **whisper(text, numberOfEmojis)**
The **whisper** method returns an array of emojis that represent the sentiment of your text.

Here's an example:

```
const { whisperer } = require('emoji-whisperer');

// Basic usage
let text = "I can't wait for my birthday.";
let emojis = whisperer.whisper(text, 5);
console.log(emojis); // Outputs: 😮,🤩🙌🏽, 🙏🥰, 💎🙌, ❤️

// Different texts will generate different results
let differentText = "The match was a nail-biting finish.";
let differentEmojis = whisperer.whisper(differentText, 3);
console.log(differentEmojis); // Outputs: 💖, 🔦👇, 👀⭕☝🏾

// If no number of results is specified, the default is 3
let defaultText = "The weather is perfect for a picnic.";
let defaultEmojis = whisperer.whisper(defaultText);
console.log(defaultEmojis); // Outputs: 👌👌, 🤘🏻, 🤌🏼

// You can even try it with single words
let singleWord = "Love";
let singleWordEmojis = whisperer.whisper(singleWord);
console.log(singleWordEmojis); // Outputs: ❤️❤️🙏🙏, 🙌🙌🙌💜💜💜😍😍, 😱😍🙌🏼, 😊🙌🎉, 💘

```

### **decorate(text, numberOfEmojis)**
The **decorate** method takes your text and inserts the emojis throughout the sentence.  👌🏼,

Here's an example:
```
const { whisperer } = require('emoji-whisperer');

var decoratedText = whisperer.decorate("I can't wait for my birthday.", 5);
console.log(decoratedText);  // I 😮 can't wait 🤩🙌🏽 for my 🙏🥰 birthday.

```
Enjoy adding an expressive flair to your text with Emoji Whisperer! 🥂😂👌

## Notes
- The numberOfEmojis parameter in both methods controls the number of emojis to generate or insert. It defaults to 3 if not specified. 👉👈
- The decorate method inserts emojis at different positions in the sentence. The exact placement of emojis will depend on the length and structure of the text. 👏👏