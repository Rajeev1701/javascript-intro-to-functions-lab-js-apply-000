function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}
function logshout(string) {
  const spy = expect.sppyon(console.log()).andCallThrough()
  shout(string)
  return string.toUpperCase()
  console.log.restore()
}
