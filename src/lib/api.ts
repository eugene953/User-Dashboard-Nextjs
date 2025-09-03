

export async function fetchUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
     next: {revalidate: 3600}, 
    })
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
}

export async function fetchUser(id: string){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
     next: { revalidate: 3600},
     })
     if (!res.ok) throw new Error("Failed to fetch user");
     return res.json()
}