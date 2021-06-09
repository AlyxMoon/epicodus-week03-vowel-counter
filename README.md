# Epicodus | Week 03 | Vowel Counter

> Let's say we have an application that counts the number of vowels in a string. This application has tests detailing each behavior it must exhibit. However, they're out of order! Reorder the following list of tests from the simplest possible behavior to the most complex behavior with your partner.

I added logic for the `vowelCounter()` function, and automated testing by running a function to check various inputs. This can be seen in the console if you open the page in your browser.

## Live Site
[https://alyxmoon.github.io/epicodus-week03-vowel-counter/](https://alyxmoon.github.io/epicodus-week03-vowel-counter/)

## Tests

#### Describe: vowelCounter();

```
Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1
```

```
Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1
```

```
Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2
```

```
Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7
```

```
Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelCounter("*&$92%");
Expected Output: 0
```

```
Test: "It recognizes a single vowel regardless of case."
Code: vowelCounter("A");
Expected Output: 1
```

```
Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7
``

```
Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7
```
