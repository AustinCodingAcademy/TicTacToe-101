# TicTacToe-101

## Instructions

1. Fork and clone the [TicTacToe-101 Repo](https://github.com/AustinCodingAcademy/TicTacToe-101)
1. Use Live-Server to open this folder in the browser.
1. Open your Chrome inspector tool and select the Console tab.
1. Deselect the "Select an element in the page to inspect" tool - *so you don't have highlights chasing your cursor*.
1. Click on the top-left box...what happens in the console?
    * you should see something like the following screenshot:
    * ![Console-Tab-Example](./images/Console-Tab-Example.png)
1. Notice the notes on the far right: `scripts.js: 20`, `scripts.js: 43`, and `scripts.js: 44`. These tell you at which line of code this log was generated.
1. Go find the lines these logs came from in the `scripts.js` file.
1. Go to the `index.html` file and find line 22: `<td id='top-left' onclick="handleClick(this)" ></td>`
    * The `onclick` method calls the `handleClick()` function in the `scripts.js` file and passes itself, the `<td>` element to it.
    * Don't move on until you understand how that works.
1. Now read each of the green comment lines to start piecing together how this app works.
1. After you have a general understanding find the `// @TODO` comments and fix the problems described.
1. Go to the HTML file and create all the rows you need for a complete Tic Tac Toe board.
1. When you've finished create a Pull Request (*PR*) on the original repo and turn in the URL of that PR.

*******

## Follow-Up Video

### [Repo Overview] (https://player.vimeo.com/video/395004475)

*******
