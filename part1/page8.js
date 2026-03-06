let i=1
while(i<=10){
    console.log(i)
    i++
}

while(i<=10){
    console.log(i)
    if(i==5){
        break
    }
    i++
}
while(i<=10){
    i++
    if(i==5){
        break
    }
    console.log(i)
}

while(i<=10){
    i++
    if(i==5){
        continue
    }
    console.log(i)
}