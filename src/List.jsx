import PropTypes from 'prop-types'
function List(props) {
    const itemList = props.items
    const category = props.category
    // fruits.sort();
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Desc
    // fruits.sort((a,b) => a.calories - b.calories); // Asc
    // fruits.sort((a,b) => b.calories - a.calories); // Desc

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100) // Low
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100) // Low
    const listItems = itemList.map(item => 
    <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)
    return (
    <div><h3 className="list-category">{category}</h3><ol className="list-items">{listItems}</ol></div>
  )
}

List.defaultProps = {
    category: "Category",
    items: []

}

List.PropTypes ={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
         name: PropTypes.string, calories: PropTypes.number}))
}

export default List