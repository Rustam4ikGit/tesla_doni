let up = document.querySelector('.up')
let down = document.querySelector('.down')
let up2 = document.querySelector('.up2')
let down2 = document.querySelector('.down2')
let up3 = document.querySelector('.up3')
let down3 = document.querySelector('.down3')
let speed = document.querySelector('.speed')
let energy = document.querySelector('.energy')
let switch1 = document.querySelector('.switch1')
let switch2 = document.querySelector('.switch2')
let temperature = document.querySelector('.temperature')
let price = document.querySelector('.price')
let disks = document.querySelector('.disks')
let pic = document.querySelector('.main_picture')
let container = document.querySelector('.container')
let switch3 = document.querySelector('.switch3')
let features = document.querySelector('.features')
let gray_t9 = document.createElement('span')
let gts = document.querySelector('.gray_title9')
let c_1 = document.querySelector('.color1')
let c_2 = document.querySelector('.color2')
let c_3 = document.querySelector('.color3')

let speed_value = 60
let energy_value = 750
let temperature_value = 20
let price_value = 89990
let disks_value = 19

speed.innerHTML = `${speed_value} km/h`
energy.innerHTML = `${energy_value} km`
temperature.innerHTML = `${temperature_value}°`
price.innerHTML = `${price_value}`
disks.innerHTML = disks_value
gray_t9.innerHTML = 'Цвет салона'

gray_t9.classList.add('gray_title9')

up.onclick = () =>{
    speed_value += 1
    energy_value -= 2
    energy.innerHTML = `${energy_value} km`
    speed.innerHTML = `${speed_value} km/h`

}

down.onclick = () =>{
    speed_value -= 1
    energy_value += 2
    energy.innerHTML = `${energy_value} km`
    speed.innerHTML = `${speed_value} km/h`
    
}


up2.onclick = () =>{
    temperature_value += 1
    energy_value += 2
    energy.innerHTML = `${energy_value} km`
    temperature.innerHTML = `${temperature_value}°`

}

down2.onclick = () =>{
    temperature_value -= 1
    energy_value -= 2
    energy.innerHTML = `${energy_value} km`
    temperature.innerHTML = `${temperature_value}°`
    
}

up3.onclick = () =>{
    disks_value += 1
    price_value += 900
    price.innerHTML = price_value
    disks.innerHTML = disks_value
}

down3.onclick = () =>{
    disks_value -= 1
    price_value -= 900
    price.innerHTML = price_value
    disks.innerHTML = disks_value
}

switch1.onclick = () =>{
    if (switch1.checked === true) {
        price_value += 5000
        price.innerHTML = price_value
    }else{
        price_value -= 5000
        price.innerHTML = price_value 
    }
}

switch2.onclick = () =>{
    if (switch2.checked === true) {
        price_value += 50000
        price.innerHTML = price_value
    }else{
        price_value -= 50000
        price.innerHTML = price_value 
    }
}

gts.style.display = 'none'
c_1.style.display = 'none'
c_2.style.display = 'none'
c_3.style.display = 'none'

switch3.onclick = () =>{
    if (switch3.checked === true) {
        c_1.style.display = 'none'
c_2.style.display = 'none'
c_3.style.display = 'none'
        gts.style.display = 'none'
        features.style.display = 'flex'
        pic.src = './img/image 1.png'
    }else{
        c_1.style.display = 'block'
c_2.style.display = 'block'
c_3.style.display = 'block'
        gts.style.display = 'block'
        features.style.display = 'none'
        pic.src = './img/image 10.png'
        }
}

c_1.onclick = () =>{
    pic.src = './img/image 10.png'
    switch3.onclick = () =>{
        if (switch3.checked === true) {
            c_1.style.display = 'none'
    c_2.style.display = 'none'
    c_3.style.display = 'none'
            gts.style.display = 'none'
            features.style.display = 'flex'
            pic.src = './img/image 1.png'
        }else{
            c_1.style.display = 'block'
    c_2.style.display = 'block'
    c_3.style.display = 'block'
            gts.style.display = 'block'
            features.style.display = 'none'
            pic.src = './img/image 10.png'
            }
    }
    
}

c_2.onclick = () =>{
    pic.src = './img/image 9.png'
    switch3.onclick = () =>{
        if (switch3.checked === true) {
            c_1.style.display = 'none'
    c_2.style.display = 'none'
    c_3.style.display = 'none'
            gts.style.display = 'none'
            features.style.display = 'flex'
            pic.src = './img/image 1.png'
        }else{
            c_1.style.display = 'block'
    c_2.style.display = 'block'
    c_3.style.display = 'block'
            gts.style.display = 'block'
            features.style.display = 'none'
            pic.src = './img/image 9.png'
            }
    }
    
}

c_3.onclick = () =>{
    pic.src = './img/image 8.png'
    switch3.onclick = () =>{
        if (switch3.checked === true) {
            c_1.style.display = 'none'
    c_2.style.display = 'none'
    c_3.style.display = 'none'
            gts.style.display = 'none'
            features.style.display = 'flex'
            pic.src = './img/image 1.png'
        }else{
            c_1.style.display = 'block'
    c_2.style.display = 'block'
    c_3.style.display = 'block'
            gts.style.display = 'block'
            features.style.display = 'none'
            pic.src = './img/image 8.png'
            }
    }
    
}
