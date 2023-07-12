# 👀👉👉👉 Emoji-Whisperer

Emoji Whisperer 😎😎😎💪🏽 is an npm package that lets you add a touch of fun and expressiveness to your text. This package can interpret the sentiment behind your text and suggest relevant emojis. 🙌

## Installation

```bash
npm install --save emoji-whisperer
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

// You can even try it with single words
let singleWord = "Love";
let singleWordEmojis = whisperer.whisper(singleWord);
console.log(singleWordEmojis); // Outputs: ❤️❤️🙏🙏, 🙌🙌🙌💜💜💜😍😍, 😱😍🙌🏼, 😊🙌🎉, 💘

```

### **decorate(text, emoji_density, randomness)**
The **decorate** method takes your text and inserts emojis throughout the sentence.👌🏼,

The **'emoji_density'** parameter is a number between 0 and 1 that controls the density of emojis in the text.

The **'randomness'** parameter is also a number between 0 and 1. It controls the randomness of the emoji selection. Higher values will result in a more diverse selection of emojis.

Here's an example:
```
const { whisperer } = require('emoji-whisperer');

var decoratedText = whisperer.decorate("I can't wait for my birthday.", 1, 0.5);
console.log(decoratedText);  // I can't wait 🥳🙌 for my birthday. ✌️❤️✌️❤️✌️❤️

```

Enjoy adding an expressive flair to your text with Emoji Whisperer! 🥂😂👌

## Notes
- The **'numberOfEmojis'** parameter in the **'whisper'** method controls the number of emojis to generate. It defaults to 3 if not specified. 👉👈
- In the **'decorate'** method, the placement of emojis will depend on the length and structure of the text, as well as the values of emoji_density and randomness.👏👏
- Both **'emoji_density'** and **'randomness'** should be values between 0 and 1. An error will be thrown if they are not.
