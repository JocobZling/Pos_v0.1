/**
 * Created by zl on 7/11/17.
 */
const loadAllItems = require('./loadAllItems.js');
module.exports = function main(inputs) {
  var item;
  var list='***<Ã»Ç®×¬ÉÌµê>¹ºÎïÇåµ¥***\n';
  var sum=0;
  var item_list=[];
  var cart_list=[];
  var barcode_list=[];
  var allItems = loadAllItems();
  var item_barcode;
  for(var i=0;i<inputs.length;i++)
  {
    item_barcode=inputs[i];
    if(inputs[i].length == 10){
      barcode_list.push(item_barcode);
    }
    else{
      item_barcode=inputs[i].substr(0,10);
      barcode_list.push(item_barcode);
    }
  }
  for(var j=0;j<barcode_list.length;j++)
  {
    for(var k=0;k<allItems.length;k++){
      item=allItems[k];
      if(allItems[k].barcode==barcode_list[j]){
        cart_list.push(item);
      }
    }
  }
  for(var l=0;l<cart_list.length;l++){
    item=cart_list[l];
    if(item_list.length==0){
      item.count=1;
      item_list.push(item);
    }
    else{
      for(var n=0;n<item_list.length;n++){
        if(cart_list[l]==item_list[n]){
          item.count++;
        }
        else if(n==item_list.length-1){
          item_list.push(item);
          item.count=0;
        }
      }
    }
  }
  for(var m=0;m<item_list.length;m++)  {
    list=list +'Ãû³Æ£º'+item_list[m].name+'£¬ÊýÁ¿£º'+item_list[m].count+item_list[m].unit+'£¬µ¥ŒÛ£º'+item_list[m].price.toFixed(2)+'(Ôª)£¬Ð¡ŒÆ£º'+item_list[m].count*item_list[m].price+'.00(Ôª)\n';
    sum+= item_list[m].count*item_list[m].price;
  }
  list=list+'----------------------\n×ÜŒÆ£º'+sum.toFixed(2)+'(Ôª)\n**********************';
  return list;
};
};
