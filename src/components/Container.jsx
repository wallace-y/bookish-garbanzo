import { useState } from "react";
import ShoppingList from "./ShoppingList";
import StockList from "./StockList";

function Container() {
  const initialStockList = [
    { name: "milk", quantity: 50 },
    { name: "cheese", quantity: 3 },
    { name: "bread", quantity: 50 },
    { name: "eggs", quantity: 50 },
  ];

  const sortedStock = initialStockList.sort((a, b) => {
    let textA = a.name.toUpperCase();
    let textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  const [StockListOfItems, setStockListOfItems] = useState(sortedStock);

  const [shoppingListOfItems, setShoppingList] = useState([]);

  initialStockList;
  return (
    <div className="d-flex flex-row justify-content-between mb-3">
      <StockList
        stock={StockListOfItems}
        setShoppingList={setShoppingList}
        shoppingListOfItems={shoppingListOfItems}
        setStockListOfItems={setStockListOfItems}
      />
      <ShoppingList
        setShoppingList={setShoppingList}
        shoppingListOfItems={shoppingListOfItems}
      />
    </div>
  );
}

export default Container;
