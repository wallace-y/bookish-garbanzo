function StockListItem(props) {
  const name = props.name;
  const quantity = props.quantity;
  const setShoppingList = props.setShoppingList;
  const shoppingListOfItems = props.shoppingListOfItems;
  const setStockListOfItems = props.setStockListOfItems;
  const listStock = props.listStock;

  const addItem = (name) => {
    setShoppingList((currentList) => {
      const currentListItem = currentList.filter((item) => {
        return item.name === name;
      });
      const notInCurrentList = currentList.filter((item) => {
        return item.name !== name;
      });
      const currentItemInStock = listStock.filter((stock) => {
        return stock.name === name;
      });
      const currentItemInStockQuantity = currentItemInStock[0].quantity;

      if (currentItemInStockQuantity !== 0) {
        if (currentListItem.length > 0) {
          let newQuantity = currentListItem[0].quantity + 1;
          return [{ name: name, quantity: newQuantity }, ...notInCurrentList];
        } else {
          return [{ name: name, quantity: 1 }, ...currentList];
        }
      } else {
        return [...currentList];
      }
    });
    setStockListOfItems((currentList) => {
      const currentListItem = currentList.filter((item) => {
        return item.name === name;
      });
      const notInCurrentList = currentList.filter((item) => {
        return item.name !== name;
      });
      if (currentListItem[0].quantity === 0) {
        return [...currentList];
      } else {
        let newQuantity = currentListItem[0].quantity - 1;
        return [{ name: name, quantity: newQuantity }, ...notInCurrentList];
      }
    });
  };
  return (
    <li className="list-group-item list-group-item d-flex justify-content-between align-items-center">
      <button
        className="btn btn-success"
        onClick={() => {
          addItem(name);
        }}
      >
        Add
      </button>
      {name}
      <span className="badge bg-dark rounded-pill"> {quantity}</span>
    </li>
  );
}

export default StockListItem;
