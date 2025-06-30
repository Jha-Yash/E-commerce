function List2(props){
    const category=props.category;
    const listitems=props.items;

    const list =listitems.map(x=><li key={x.id}>
                             {x.name}:&nbsp;
                             {x.calories}
    </li>);

    return(
        <>
      <h3>{category}</h3>
      <ol>{list}</ol>
      </>
    );
}
export default List2