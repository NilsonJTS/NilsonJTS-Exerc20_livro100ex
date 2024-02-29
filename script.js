//fazendo um programa que testa se uma palavra é palindromo
//vamos usar split para separar a palavra em uma array de letras
//vamos usar reverse para reverter a array
//vamos usar join para juntar a array novamente em uma palavra

let word=prompt("escreva uma palavra, vou testar para ver se é palindromo")
word=word.toLowerCase("")

let ReverseWord=word.split("")
ReverseWord=ReverseWord.reverse()
ReverseWord=ReverseWord.join("")
console.log(ReverseWord)

if(word===ReverseWord){
    console.log(`Esta palavra é um palíndromo: Original: ${word}. Reverso: ${ReverseWord}`)
}else{
    console.log(`Esta palavra não é palíndromo: Original: ${word}. Reverso: ${ReverseWord}`)
}