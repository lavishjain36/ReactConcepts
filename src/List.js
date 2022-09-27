//set up individual props,pass the entire object ,to spread operator

//created an array of object
const data=[
    {id:1,name:"Pavan",age:22},
    {id:2,name:"Ramesh",age:32},
    {id:3,name:"Sumesh",age:35},
    {id:4,name:"Swapnil",age:40},
    {id:5,name:"Jenny",age:18}
]

function List(){
    return(
        <section>
            {data.map((item)=>{
                return <Person key={item.id} {...item}></Person>
            })}
        </section>
    )

}
const Person=({name,age})=>{
    return(
        <h1>
            {name}:{age}
        </h1>
    )
}
export default List