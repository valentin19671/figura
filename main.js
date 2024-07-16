
let form = document.getElementById('dd')



document.getElementById('form-prochit').addEventListener('submit', (e)=> {
e.preventDefault()
})
// let day;
// let month;
// let year;

let id1 = document.getElementById('id1') 
let id2 = document.getElementById('id2')
let id3 = document.getElementById('id3')
let id4 = document.getElementById('id4')
let id5 = document.getElementById('id5')
let id6 = document.getElementById('id6')
let id7 = document.getElementById('id7')


let InputOne = document.getElementById('day')
let InputTwo = document.getElementById('month')
let InputThee = document.getElementById('year')







form.addEventListener('click',(e)=> {

    // e.preventDefault()
    let numberOne = document.getElementById('day').value
    let numberTwo = document.getElementById('month').value
    let numberThee = document.getElementById('year').value

    // day = numberOne.value
    // month = numberTwo.value
    // year = numberThee.value

    console.log(numberOne)
    console.log(numberTwo)
    console.log(numberThee)

    function result() {
        let punktOne = Number(numberOne) - 22
        let diop1 = Math.abs(numberOne % 22)
        if(diop1 === 0  ) {
            id1.textContent = 22        
        } else if (numberOne <= 22 && numberOne >= 1 ) {
            console.log() 
            id1.textContent = Number(numberOne)
        } else if (diop1 > 0)  {
            id1.textContent = diop1
        }

        // id1.textContent = punktOne
        
        let p21 = numberOne.split('')
        if(p21.length === 1) {
            p21.push('0')
        }
        let p22 = numberTwo.split('')
        
        if(p22.length === 1) {
            p22.push('0')
        }
        let p23 = numberThee.split('')

        function punktTwo() {
            

            let result = Number(p21[0]) + Number(p21[1]) +  Number(p22[1]) +  Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3])
            let fihelP2 = Math.abs(result - 22)
            let diop2 = Math.abs(fihelP2 % 22)
            if(diop2 === 0) {
                id2.textContent = 22
            } else if (fihelP2 <= 22 && fihelP2 >= 1 ) {
                id2.textContent = fihelP2
            } else if (diop2 > 0) {
                id2.textContent = Math.abs(diop2)
            } 
            
            // console.log(result)
        }

        punktTwo()

        function punktThee() {
            let yearResult =   Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3]) - 22
            let result1 = Number(p22[1]) + yearResult
            let result2 = Number(p22[1]) + punktOne
            let result3 = result1 + result2
            let result4 = Math.abs(result1 + result3 - 22)
            console.log(result4)
            
            let diop3 = Math.abs(result4 % 22)
            if(diop3 === 0) {
                id3.textContent = 22
            } else if (result4 <= 22 && result4 >= 1 ) {
                id3.textContent = result4
            } else if (diop3 > 0) {
                id3.textContent = Math.abs(diop3)
            } 
            // id3.textContent = result4
            
        }

        punktThee()

        function punktFor() {
            let yearResult =   Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3]) - 22
            let result1 = Number(p22[1]) + yearResult
            let result2 = Number(p22[1]) + punktOne
            let result3 = result1 + result2
            let result4 = Math.abs(Number(p22[1]) + result3 - 22)
            // console.log(result4)
            
            let diop4 = Math.abs(result4 % 22)
            if(diop4 === 0) {
                id4.textContent = 22
            } else if (result4 <= 22 && result4 >= 1 ) {
                id4.textContent = Math.abs(result4)
            } else if (diop4 > 0) {
                id4.textContent = Math.abs(diop4)
            } 

            // id4.textContent = result4
           
        }


        punktFor()

        function punktFive() {
            let yearResult =   Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3]) - 22
            let result1 = Number(p22[1]) + yearResult
            let result2 = Math.abs(Number(p22[1]) + result1)
            // console.log(result2)
            
            let diop5 = Math.abs(result2 % 22)
            if(diop5 === 0) {
                id5.textContent = 22
            } else if (result2 <= 22 && result2 >= 1 ) {
                id5.textContent = Math.abs(result2)
            } else if (diop5 > 0) {
                id5.textContent = Math.abs(diop5)
            } 
            // id5.textContent = result2
            
        }


        punktFive()

        function punktsix() {
            let yearResult =   Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3]) - 22
            let result1 = Number(p22[1]) + yearResult
            let result2 = Number(p22[1]) + punktOne 
            let result4 = Math.abs(result1 + result2)
            // console.log(result4)
            
            let diop6 = Math.abs(result4 % 22)
            if(diop6 === 0) {
                id6.textContent = 22
            } else if (result4 <= 22 && result4 >= 1 ) {
                id6.textContent = Math.abs(result4)
            } else if (diop6 > 0) {
                id6.textContent = Math.abs(diop6)
            } 
            // id6.textContent = result4
            
        }


        punktsix()

        function punktseven() {
            let yearResult =   Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3]) - 22
            // let result1 = Number(p22[1]) + yearResult

            let result2 = Number(p22[1]) + punktOne 
            let result4 = Math.abs(yearResult + result2)
            // console.log(result4)
            
            let diop7 = Math.abs(result4 % 22)
            if(diop7 === 0) {
                id7.textContent = 22
            } else if (result4 <= 22 && result4 >= 1 ) {
                id7.textContent = Math.abs(result4)
            } else if (diop7 > 0) {
                id7.textContent = Math.abs(diop7)
            } 
            // id7.textContent = result4
            
        }


        punktseven()

        
        // console.log(eee)
    }
    result()


})




let blockFigura=document.querySelector('.block')
let button=document.querySelector('.button')
button.addEventListener('click',()=>{
    blockFigura.classList.remove('opacity0')
    blockFigura.classList.add('opacity1')
})


































