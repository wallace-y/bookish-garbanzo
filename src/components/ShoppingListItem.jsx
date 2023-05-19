function ShoppingListItem(props) {
  const name = props.name;
  const quantity = props.quantity;
  const shoppingListOfItems = props.shoppingListOfItems;
  const setShoppingList = props.setShoppingList;

  function removeItem(name) {
    setShoppingList((currentList) => {
      const currentListItem = currentList.filter((item) => {
        return item.name === name;
      });
      const notInCurrentList = currentList.filter((item) => {
        return item.name !== name;
      });
      if (currentListItem[0].quantity === 1) {
        return [...notInCurrentList];
      } else {
        let newQuantity = currentListItem[0].quantity - 1;
        return [{ name: name, quantity: newQuantity }, ...notInCurrentList];
      }
    });
  }

  return (
    <li className="list-group-item list-group-item d-flex justify-content-between align-items-center">
      <button
        className="btn btn-danger"
        onClick={() => {
          removeItem(name);
        }}
      >
        Remove
      </button>
      {name}
      <span className="badge bg-dark rounded-pill"> {quantity}</span>
    </li>
  );
}

export default ShoppingListItem;
