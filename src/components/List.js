const List = (props) => {
  //若傳進的props沒有相對應的屬性,他會直接使用預設值
  const { name = "Blank", price = 9999999 } = props;
  return (
    <li>
      <span>{name}</span>
      <span>${price}</span>
    </li>
  );
};

export default List;
