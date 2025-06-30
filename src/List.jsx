 function List(){//props used for reusable list
    const fruits=["apple","mango","banana","orange","pineapple"];
    fruits.sort();
    const listitem=fruits.map(fruit=>
      <li>{fruit}</li>
    );
    const fruits2=[{id:1,name:"apple",calories:95},//objects
                   {id:2,name:"mango",calories:45},
                   {id:3,name:"banana",calories:125},
                   {id:4,name:"orange",calories:105},
                   {id:5,name:"pineapple",calories:37}
                  ];
   // fruits2.sort((a,b)=> a.name.localeCompare(b.name)); //alphabetical
   // fruits2.sort((a,b)=> b.name.localeCompare(a.name)); //reverse alphabetical
   // fruits2.sort((a,b)=> a.calories-b.calories);        //numeric
   // fruits2.sort((a,b)=> b.calories-a.calories);        //reverse numeric

  
    const listitem2=fruits2.map(fruit2=>
      <li key={fruit2.id}>
        {fruit2.name}: &nbsp; 
        <b>{fruit2.calories}</b></li>//react bolta hai list mai sbke pass unique key hona chahiye
    );

    const lowcaloriefruits=fruits2.filter(fruit3=>fruit3.calories<100);
    const listitem3=lowcaloriefruits.map(lowcaloriefruit=>
      <li key={lowcaloriefruit.id}>
        {lowcaloriefruit.name}: &nbsp; 
        <b>{lowcaloriefruit.calories}</b></li>
    );

   
    return(
      <>
      <p>{fruits}</p>
      <ol>{listitem}</ol>
      <ul>{listitem2}</ul>
      <ol>{listitem3}</ol>
    
      </>);
 }
 export default List