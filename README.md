Lightweight package to help you find the perfect emoji based on contextual analysis. Returns set of emojis that closely match the intended sentiment or meaning. Ideal for social media posts, chat bots, or any other text that can benefit with expressive emojis. Start transforming your text into a more engaging and emotive form with emoji-whisperer

Use the package with 
```
const { whisperer } = require('emoji-whisperer');
var emojis = whisperer.whisper("Had an amazing workout today, feeling stronger than ever.")

```
The result will be:
```
[ '💪', '🤖🤖', '😎' ]
```