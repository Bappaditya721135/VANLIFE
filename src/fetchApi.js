// geting the vans data from server 

export async function loadVans(id) {
    try {
    const url = id ? `/api/van/${id}` : "/api/van"
    const res = await fetch(url)
    if (!res.ok) {
        const errorMessage =  { status : res.status, message : "Failed to fetch", statusText: res.statusText };
        throw errorMessage;
    }
    return res.json()
}
catch(err) {
    throw err;
}
   }




//    getting the vans data for the host 

export async function getHostVans(id) {
    try {
    const url = id ? `/api/van/${id}` : "/api/vans/123"
    const res = await fetch(url)
    if(!res.ok) {
        const errorMessage =  { status : res.status, message : "Failed to fetch", statusText: res.statusText };
        throw errorMessage;
    }
    return res.json()
}
catch(err) {
    throw err;
}
}