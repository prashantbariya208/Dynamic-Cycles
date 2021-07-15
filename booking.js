var input,aninput,res;
res = ['gajjar bhavan','bhabha bhavan','narmad bhavan','sarabhai bhavan',
       'sardar bhavan','kasturba bhavan','tagor bhavan','neharu bhavan',
        'raman bhavan','sarojini bhavan','matherteresa bhavan','classroom complex',
       'residential quarters','svnit gate']
document.querySelector('.btn-new').addEventListener('click',function(){
    input = document.querySelector('.city').value;
    console.log(input);
    aninput = document.querySelector('.vil').value;
    console.log(aninput);
    for(var i=0;i<res.length;i++){
    if(input==res[i]&&input!=aninput){
        for(var j=0;j<res.length;j++){
            if(aninput==res[j]){
           console.log('yes you are correct');
           window.location="thankyou.html";}
        }
    }
}
      console.log('no your input is wrong');
     document.querySelector('.good').textContent = 'sorry,your entered location is wrong :( please check the location below which you can enter'
    
});