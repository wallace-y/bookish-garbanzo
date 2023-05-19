import ShoppingListItem from "./ShoppingListItem";

function ShoppingList(props) {
  const shoppingListOfItems = props.shoppingListOfItems;
  const setShoppingList = props.setShoppingList;

  return (
    <div className="mx-3">
      <h2>Selected Items</h2>
      <ul className="list-group">
        {shoppingListOfItems.map((element) => {
          return (
            <ShoppingListItem
              name={element.name}
              quantity={element.quantity}
              setShoppingList={setShoppingList}
              shoppingListOfItems={shoppingListOfItems}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
