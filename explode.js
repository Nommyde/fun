function * explode(word, p) {
  p = p && p + " " || "";

  yield p + word;

  for (let i = word.length; --i > 0;)
    yield * explode(word.substr(i), p + word.substr(0, i));
}

for (let exploded of explode("test"))
  console.log(exploded);
