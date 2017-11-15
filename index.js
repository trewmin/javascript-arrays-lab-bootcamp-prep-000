const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  const newKit = kittens
  newKit.push(name)
  return newKit
}

function prependKitten(name) {
  const newKit = kittens
  newKit.unshift(name)
  return newKit
}

function removeLastKitten() {
  const newKit = kittens
  newKit.pop()
  return newKit
}

function removeFirstKitten() {
  const newKit = kittens
  newKit.shift()
  return newKit
}
