# PIN Pad Discovery
Certain banking sites display a 5-button login page for users to enter their 4-digit PIN (the secret Personal Identification Number used to access the site).

The ten digits, 0 - 9, are randomly shuffled and a pair of digits is placed in each of the 5 buttons, without repetition.

When entering each digit of his or her PIN, the user has to click on the particular button containing that digit.

A sample login page is:
`0 or 2` `1 or 5` `3 or 4` `6 or 9` `7 or 8`

If a curious onlooker observed your button clicks, he or she would not be able to immediately guess your PIN--there are 16 possible choices.

It's not a huge number, but you want to show that this system is extremely fragile when someone knows more than one successful login sequence.

A bank startup wants to see empirical evidence and have enlisted your help to analyze some real-world data (the login details of several users).

Each test case's input is an array of successful logins for a particular user. The PIN does not change within each test case.

Each one of these successful logins is an array of 4 strings, each containing the pair of digits that was shown on the button clicked. The buttons were clicked in the order given in the array.

You may assume the site produced a valid set of buttons. A successful login will not use all buttons.

Your task is to return a string representing the user's PIN, deducing as many digits as possible. Wherever you are unsure, use a ? in its place.

### Example
For `logins = [["15", "69", "15", "78"]]` the output should be: `????`.

For `logins = [["23","17","58","17"], ["39","14","05","14"], ["37","01","59","01"], ["37","18","56","18"]]` the output should be: `3151`.

### Source
[CodeSignal](https://app.codesignal.com/)