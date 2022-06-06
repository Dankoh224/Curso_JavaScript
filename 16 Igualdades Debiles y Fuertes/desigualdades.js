// En JS existen desigualdades débiles y fuertes. Las débiles consisten en indicar si son distintas en valor y las fuertes consisten en indicar si son distintas en valor y tipo de variable: 
let a = 4;
    b = 4;
    c = "4"

if (a != b) {
    console.log("Esta es una desigualdad debil");
}
if (a != c) {
    console.log("Esta es una desigualdad debil");
}
if (a !== b) {
    console.log("Esta es una desigualdad fuerte");
}
if (a !== c) {
    console.log("Esta es una desigualdad fuerte");
}