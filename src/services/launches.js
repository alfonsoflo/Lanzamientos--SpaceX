const API_url = "https://api.spacexdata.com/v3";

export async function getAllLaunches(){
try{
    const response = await fetch(`${API_url}/launches`);
    const data = await response.json();
    return data;
} catch (error){
    console.error(error);
}
};


export async function getLaunchByFlightNumber(flightNumber){
    try{
        const response = await fetch(`${API_url}/launches/${flightNumber}`);
        const data = await response.json();
        return data;
    } catch (error){
        console.error(error);
    }
}