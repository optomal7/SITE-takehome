# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Ryan Greenberg**

Time spent: **3** hours spent in total

Link to project: https://glitch.com/edit/#!/sunny-cultured-can

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Welcome message transforms into a gameplay message after game starts

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![Alt Text](https://media.giphy.com/media/6Oy9aC9W2PO0yZ8H4d/giphy.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
Mozilla.org MDN (to make sure I was using a random sequence generator properly)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
Testing always remains a troublesome component and soaked up more time than I thought it would since the most straightforward way is to test manually. There were odd quirks that required many additional console log statements that were inserted during intermediary versions. Of course, in true web developer fashion these statements started to pollute the console too much to be able to step through mentally so I had to switch over to using breakpoints and watch statements to see how I had miss-chained my logic in myriad ways before coalescing on the solution submitted. Most of the time when I am fiddling with things, I can sometimes overfit for a solution that feels most elegant when in retrospect it’s obvious now that a linear approach was all that was necessary. Working with the glitch platform is new to me and the constant refreshing was not something I figured out how to turn off in time, and that ate into my patience here and there in inconvenient ways. What I would have preferred was an easily integratable testing harness. Using some manual testing framework for just a little one off project like this seemed like more trouble than it’s worth. Also as someone who is colorblind, I have to be mindful to use a color palette that provides the greatest contrast.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
How do modern web developers balance the need to have resilient in house components they can rely upon vs integrating vendors or community supported modules in their code as dependencies? Is it important to offload as much computing necessary on to the client side as possible or would functionality be best preserved on the server side and is cost of server resources a considerable factor in that choice? When designing interactive components, should developers care about somewhat common edge cases like colorblindness and if they aren't, are they expecting the user to already have their own workaround that they bring with them?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
The thing I would want to do is switch the paradigm completely to an infinite play model, where losing is inevitable but the experience of doing well earns you a place on a global leaderboard (requires database). I would want to add an option that allows the user to change the button colors using a slider and to upload their own sounds. Instead of using the javascript built in alert function, why not use the entire page as a canvas to drop digital confetti for making it to the leader board or menacing words of despair for pitiful losses. Perhaps it would be ideal to add a captcha because everything on the public internet gets probed by bots. Some form of bot detection and denial would be handy to prevent would be cheaters. A turn timeout hidden function should also be implemented to prevent users from taking as much time as they like to memorize or write down a sequence.



## License

    Copyright Ryan Greenberg

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.