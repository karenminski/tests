import React from "react";
import test1Example from "./test1_example.png";

// eslint-disable-next-line
const ITEMS = [
  {
    name: "Galaxy S10+",
    price: 1000,
  },
  {
    name: "iPhone 11 Pro",
    price: 1200,
  },
  {
    name: "huawei p20 pro",
    price: 900,
  }
];

const Test1 = () => {
  let products = [];
  let sum = 0;
  ITEMS.forEach(item => {
    products.push(<div>Name: {item.name} | Price: {item.price}</div>);
    sum += item.price;
  });
  return (
    <div>
      <div className={"description"}>
        Ülesanne 1:
        <p>
          Lehel tuleb kuvada kõik tooted muutujas <code>ITEMS</code>.
          Iga toote kohta peab olema nimi ja hind.
          Iga toode peab olema uuel real.
        </p>
        <div>Näiteks:</div>
        <img style={{width: 200}} src={test1Example}/>
      </div>
      <div>
        {products}
      </div>
      <div><span className={"bold"}>Summa kokku:</span> {sum}</div>
    </div>
  );
};

export default Test1;
