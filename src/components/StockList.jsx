import ShoppingListItem from "./ShoppingListItem";
import StockListItem from "./StockListItem";

function StockList(props) {
  const listStock = props.stock;
  const setShoppingList = props.setShoppingList;
  const shoppingListOfItems = props.shoppingListOfItems;
  const setStockListOfItems = props.setStockListOfItems;

  return (
    <div className="mx-3">
      <h2>Available Items</h2>
      <ul className="list-group ">
        {listStock.map((element) => {
          return (
            <StockListItem
              name={element.name}
              quantity={element.quantity}
              setShoppingList={setShoppingList}
              shoppingListOfItems={shoppingListOfItems}
              listStock={listStock}
              setStockListOfItems={setStockListOfItems}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default StockList;
