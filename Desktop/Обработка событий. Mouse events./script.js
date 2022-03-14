


//Обработка события через именованную функцию//

//
window.addEventListener('load', function (){
    const btn = document.querySelector('.btn')
    const body = document.querySelector('body')

    // btn.addEventListener('click',sayHello)
    // function sayHello(){
    //     console.log('Hello')
    // }

    ////Пример обработки события "Клик" через анонимную функцию//

    // btn.addEventListener('click', function (){
    //     console.log('Hello')
    // })


    //- **Объект event**//

    // btn.addEventListener('click', handleClick)
    // function handleClick(e){
    //     console.log(e)
    // }



    //Отписка от события//

    // btn.addEventListener('click', handleClick)
    // function handleClick(e){
    //     e.preventDefault()
    //     console.log("Redirect to google canceled");
    // }
    //
    // btn.removeEventListener('click', handleClick)

    //Назначение нескольких обработчиков//

    // btn.addEventListener('click', handleClick)
    //
    // function  handleClick(e){
    //     e.preventDefault()
    //     console.log('Redirect to Google is cancelled')
    // }
    //
    // btn.addEventListener('click', function (){
    //     alert('This is another click')
    // })



    //preventDefault//


    // btn.addEventListener('click', handleClick)
    //
    // function handleClick(e){
    //     e.preventDefault();
    //     console.log('Redirect to Google is cancelled')
    // }


    //Обработка событий у нескольких элементов//


 // btn.forEach(e =>{
 //
 //     e.addEventListener('click', function (){
 //         e.style.background = 'black'
 //     })
 //     }
 // )

    //MouseDown//

    // btn.addEventListener('mousedown', function (){
    //     btn.style.background = 'black'
    // })


    //mouseUp//


    // btn.addEventListener('mouseup', function (){
    //     btn.style.background = 'black'
    // })

    //MouseEnter//


    // btn.addEventListener('mouseenter', function (){
    //     btn.style.background = 'black'
    // })


    //MouseLeave//


    // btn.addEventListener('mouseleave', function (){
    //     btn.style.background = 'black'
    // })

    //MouseOver//


    // btn.addEventListener('mouseover', function (){
    //     btn.style.background = 'black'
    // })


    //Mouseout//

    // btn.addEventListener('mouseout', function (){
    //     btn.style.background = 'black'
    // })


    // Mousemove


    // btn.addEventListener('mousemove', function (){
    //     btn.style.background = 'black'
    // })


    //Exercise//

    // btn.addEventListener('click', function (){
    //     const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
    //    for (let i = 0; i < colors.length; i++) {
    //        let random = Math.floor(Math.random() * i)
    //        let randomColors = colors[random]
    //        body.style.background = randomColors
    //
    //    }
    // })



//     btn.addEventListener('click', function (){
//         const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
//
//         const color = colors.map((el, index,item)=>{
//             index = Math.floor(Math.random() * el.length)
//             return el = item[index]
//
//         })
//         body.style.background = `${color[0]}`
//     })


 //    const add = document.querySelector('.add')
 //    const lower = document.querySelector('.lower')
 //    const sum = document.querySelector('.sum')
 //
 //
 //    add.addEventListener('click', function (){
 //
 //        // let sumCalculate = sum.innerHTML
 //        if (sumCalculate => 1){
 //           sum.innerHTML++
 //        }
 //    })
 //    lower.addEventListener('click', function () {
 //        let sumCalculate = sum.innerHTML
 //        if (sumCalculate => 1) {
 //            sum.innerHTML--
 //        }
 //    })
 // })

