function vowelCounter (sentence) {
  return (
    sentence
    .toLowerCase()
    .match(/[aeiouAEIOU]/g) || []
  ).length
}
