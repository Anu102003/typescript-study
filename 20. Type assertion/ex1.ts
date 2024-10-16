const element1 = document.getElementById('myElement')
element1.value = "Hello"

//with type ass
const element2 = document.getElementById('myElement') as HTMLInputElement
const element3 = document.getElementById('myElement') as HTMLSelectElement

element2.value = "Hello"
element3.value = "Hello"