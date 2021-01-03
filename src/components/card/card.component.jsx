import '../../components/card/card.css'
export const Card = props => {
   return( <div className="card-container">
             <img src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150`} alt={props.monster.name}/>  
             <h2>{props.monster.name}</h2> 
             <p>{props.monster.email}</p>   
           </div> 
    )  
}