'use strict';

function calculateCount(inputs) {
  var CountArray = [];
  var Count={};
  for(var i=0;i<inputs.length;) {
    var count=0;
    for (var j = i; j < inputs.length; j++) {
      if (inputs[i].barcode == inputs[j].barcode) {
        count++;
      }
    }
    Count={
      barcode: inputs[i].barcode,
      name:    inputs[i].name,
      unit:    inputs[i].unit,
      price:   inputs[i].price,
      count:   count
    }
    CountArray.push(Count);
    i+=count;
  }
  return CountArray;
}

function makeReceipt(Count) {
  var Receipt=[];
  for (let i = 0; i < Count.length; i++) {
      Receipt.push({
        barcode: Count[i].barcode,
        name:    Count[i].name,
        unit:    Count[i].unit,
        price:   Count[i].price,
        count:   Count[i].count,
        sum:     Count[i].count * Count[i].price
    })
  }
  return Receipt;
}

function buildSingleItem(Receipt) {
  return `名称：${Receipt.name}，数量：${Receipt.count}${Receipt.unit}，单价：${Receipt.price.toFixed(2)}(元)，小计：${Receipt.sum.toFixed(2)}(元)`
}
function printReceipt(inputs) {
  var CountArray=calculateCount(inputs);
  var Receipt = makeReceipt(CountArray);
  var s="";
  var total=0;
  for(let i=0;i<Receipt.length;i++)
  {
    /* s+="名称："+Receipt[i].name+"，"+"数量："+Receipt[i].count+Receipt[i].unit+"，" +
     "单价："+Receipt[i].price+"(元)，"+"小计："+Receipt[i].sum+"(元)"+"\n";
     total+=Receipt[i].sum;
     }
     s+="----------------------\n"+"总计："+total+"(元)\n"+"**********************";*/
    if (i!= Receipt.length - 1) {
      s += buildSingleItem(Receipt[i]) + '\n';
    } else {
      s += buildSingleItem(Receipt[i]);
    }
    total += Receipt[i].sum;
  }
  console.log( `***<没钱赚商店>收据***
${s}
----------------------
总计：${total.toFixed(2)}(元)
**********************`);
}
/*const inputs = [
  {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00

  },
  {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00
  },
  {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00
  },
  {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00
  },
  {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00
  },
  {
    barcode: 'ITEM000001',
    name: '雪碧',
    unit: '瓶',
    price: 3.00
  },
  {
    barcode: 'ITEM000001',
    name: '雪碧',
    unit: '瓶',
    price: 3.00
  },
  {
    barcode: 'ITEM000004',
    name: '电池',
    unit: '个',
    price: 2.00
  }
];
printReceipt(inputs);*/
