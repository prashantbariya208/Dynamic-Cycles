var input,gcycle,ngcycle,tr,fals,arr,nu=0,arr1;
document.querySelector('.sub').addEventListener('click',function(){
    fals = document.querySelector('.cyc1').value;
     arr = function(str){
          return [...str]
       }
    arr1 = arr(fals);
    console.log(arr1);
    if(arr1.length==8){
    for(var i=0;i<8;i++){
        if(i==0){
        if(arr1[i]=='u'||arr1[i]=='U'){
             nu++;
        }}
        if(i==1){
        if(arr1[1]==1){
            nu++;
        }}
        if(i==2){
       if(arr1[2]>5){
        nu++;
      }}
      if(i==5){
      if(arr1[5]>=0){
        nu++;
      }}
      if(i==6){
      if(arr1[6]>=0){
        nu++;
      }}
      if(i==7){
      if(arr1[7]>=0){
        nu++;
      }}
    }
    console.log(nu);
    if(nu == 6){
    input = document.querySelector('.cyc').value;
    console.log(input);
    if(input=='gear cycle'){
        gcycle  = Math.floor(Math.random() * 15) + 20;
        ngcycle = Math.floor(Math.random() * 10) + 2;
        tr = Math.floor(Math.random() * 1000) + 1500;
        document.querySelector('.price1').textContent = gcycle;
        document.querySelector('.numb1').textContent = 'D-'+ngcycle;
        document.querySelector('.pass1').textContent = tr;
    }
    if(input == 'non gear cycle'){
        gcycle  = Math.floor(Math.random() * 15) + 10;
        ngcycle = Math.floor(Math.random() * 10) + 12;
        tr = Math.floor(Math.random() * 1000) + 2500;
        document.querySelector('.price1').textContent = gcycle;
        document.querySelector('.numb1').textContent = 'C-'+ngcycle;
        document.querySelector('.pass1').textContent = tr;
    }
    if(input=='ladies cycle'){
        gcycle  = Math.floor(Math.random() * 10) + 10;
        ngcycle = Math.floor(Math.random() * 10) + 22;
        tr = Math.floor(Math.random() * 1000) + 3500;
        document.querySelector('.price1').textContent = gcycle;
        document.querySelector('.numb1').textContent = 'L-'+ngcycle;
        document.querySelector('.pass1').textContent = tr;
    }
    document.querySelector('.inner_footer').textContent = 'Thank you for booking the dynamic cycle enjoy your ride '
}
}
if(nu!=6){
    document.querySelector('.inner_footer').textContent = 'you enrolment number is wrong check it once again'
} 
})