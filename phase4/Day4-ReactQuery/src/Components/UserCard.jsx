import {useQuery} from "@tanstack/react-query";
function UserCard({id}){
    const {data,isLoading,error}= useQuery({queryKey:["users",id],
                                            queryFn: async()=> {
                                                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                                                if(!response.ok){
                                                    throw new Error("something went wrong");
                                                }
                                                return response.json();

                                            }
    })
    if(isLoading){
        return<h2>loading...</h2>
    }
    if(error){
        return<h2>{error.message}</h2>
    }


    return(
          <div
      style={{
        border: "1px solid black",
        padding: "20px",
        width: "300px",
        borderRadius: "10px",
      }}
    >
      <h2>{data.name}</h2>

      <p>
        <strong>Username:</strong> {data.username}
      </p>

      <p>
        <strong>Email:</strong> {data.email}
      </p>

      <p>
        <strong>Phone:</strong> {data.phone}
      </p>

      <p>
        <strong>Website:</strong> {data.website}
      </p>
    </div>
  );
    
}
export default UserCard;