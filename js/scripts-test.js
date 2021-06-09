function logDescription (description) {
  console.log(`%c ${description}`, 'font-weight: bold;')
}

function logResult (actual, expected) {
  if (actual !== expected) {
    console.log(
      `%c -- Incorrect | actual: ${actual} | expected: ${expected}`,
      'background-color: #290000',
    )
  } else {
    console.log('%c -- passed!', 'background-color: green')
  }
}

const tests = [
  function () {
    logDescription('It recognized a single vowel.')

    const actual = vowelCounter('a')
    const expected = 1

    logResult(actual, expected)
  },

  function () {
    logDescription('It recognizes a single vowel in a word with multiple characters.')

    const actual = vowelCounter('cat')
    const expected = 1

    logResult(actual, expected)
  },

  function () {
    logDescription('It recognizes multiple vowels in a single word.')
  
    const actual = vowelCounter('cater')
    const expected = 2

    logResult(actual, expected)
  },

  function () {
    logDescription('It recognizes vowels in a multiple-word sentence.')
  
    const actual = vowelCounter('cats catered the event')
    const expected = 7

    logResult(actual, expected)
  },

  function () {
    logDescription('It ignores non-alphabetical characters since they can\'t be vowels.')
  
    const actual = vowelCounter('*&$92%')
    const expected = 0

    logResult(actual, expected)
  },

  function () {
    logDescription('It recognizes a single vowel regardless of case.')
  
    const actual = vowelCounter('A')
    const expected = 1

    logResult(actual, expected)
  },

  function () {
    logDescription('It recognizes vowels in a multiple word sentence regardless of capitalization.')
  
    const actual = vowelCounter('CATS CATERED THE EVENT')
    const expected = 7

    logResult(actual, expected)
  },

  function () {
    logDescription('It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization.')
  
    const actual = vowelCounter('CaTS CATEReD ThE EveNT')
    const expected = 7

    logResult(actual, expected)
  },
]

function runTests () {
  tests.forEach(test => test())
}

runTests()