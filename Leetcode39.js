var KombinasyonToplamı = function(deger, hedef) {
    let sonuc = [];
    let rec = (num, toplam, guncel) => {
      for (let i=0; i<nums.length; i++){
        if (toplam < hedef) {
          rec(num.slice(i), toplam + nums[i], [...guncel, num[i]]);
        }
        else if(toplam > hedef){
          return;
        }
        else if(toplam == hedef){
            sonuc.push(guncel)
          return;
        }
      }
    }
    rec(deger, 0, []);
    return sonuc;
  };   
