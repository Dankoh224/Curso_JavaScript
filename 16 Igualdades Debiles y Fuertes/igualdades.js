// En JS existen igualdades débiles y fuertes. Las débiles consisten en indicar si son exactamente iguales en valor y las fuertes consisten en indicar si son exactamente iguales en valor y tipo de variable:|
let a = 5;
    b = 5;
    c = "5"

if (a == b) {
    console.log("Esta es una igualdad debil")
}
if (a == c) {
    console.log("Esta es una igualdad debil")
}
if (a === b) {
    console.log("Esta es una igualdad fuerte")
}
if (a === c) {
    console.log("Esta es una igualdad fuerte")
}