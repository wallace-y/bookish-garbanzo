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
  const [StockListOfItems, setStockListOfItems] = useState(initialStockList);

  const [shoppingListOfItems, setShoppingList] = useState([]);

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
