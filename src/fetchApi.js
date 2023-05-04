// geting the vans data from server 

export async function loadVans() {
    const res = await fetch("/api/van")
    
    if(res.status === 200) {
        const data = res.json();
        return data;
    }
    else {
        // throw new Error("something went wront")
        throw {
            message: "failed to fetch",
            status: res.status,
        }
    }
   }