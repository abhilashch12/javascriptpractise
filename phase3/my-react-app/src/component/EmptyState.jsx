function EmptyState({icon,message,actionText,onAction}){


    return(
        <div>
         <h2>{icon}</h2>
         <h2>{message}</h2>
         <button onClick={onAction}>{actionText}</button> 
        </div>
    )
}
export default EmptyState;