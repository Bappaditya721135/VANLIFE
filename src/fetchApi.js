// geting the vans data from server 

export async function loadVans() {
    const res = await fetch("/api/van")
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
   }