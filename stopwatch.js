


const stopWatch = () =>{
    let countedSec = mySecs.value;
    countedSec++;
    mySecs.value = countedSec;
    setTimeout(stopWatch, 10)
    if(mySecs.value == 100){
        mySecs.value = 0;
        myMin.value++;
    }
    if(myMin.value == 60){
        myMin.value = 0;
        myHour.value++
    }
}

const stop =()=>{
    myHour.innerText = myHour
    myMin.innerText = myMin
    mySecs.innerText = my
}

const reset =()=>{
    myHour.value = ""
    myMin.value = ""
    mySecs.value = ""
}