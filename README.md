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
You can also provide an optional n parameter to specify how many emojis you want in the response. Note that the returning array is sorted by confidence. Best matching emojis return first. If n is greater than the number of matching emojis the length of the retuning array will only contain the matching emojis
```
const { whisperer } = require('emoji-whisperer');
var emojis = whisperer.whisper("I can't wait for my birthday.", 6)
```
Response:
```
[ '🎉', '✋', '🕒', '👩‍❤', '⏳', '🤚' ]
```