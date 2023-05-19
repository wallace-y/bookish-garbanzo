import ShoppingListItem from "./ShoppingListItem";

function ShoppingList(props) {
  const shoppingListOfItems = props.shoppingListOfItems;
  const setShoppingList = props.setShoppingList;
  const stock = props.StockListOfItems;
  const setStockListOfItems = props.setStockListOfItems;

  return (
    <div className="mx-3">
      <h2>Selected Items</h2>
      <ul className="list-group">
        {shoppingListOfItems
          .sort((a, b) => {
            let textA = a.name.toUpperCase();

            let textB = b.name.toUpperCase();

            return textA < textB ? -1 : textA > textB ? 1 : 0;
          })
          .map((element) => {
            return (
              <ShoppingListItem
                name={element.name}
                quantity={element.quantity}
                setShoppingList={setShoppingList}
                shoppingListOfItems={shoppingListOfItems}
                stock={stock}
                setStockListOfItems={setStockListOfItems}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ShoppingList;
