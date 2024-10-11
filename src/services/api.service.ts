import axios from "axios";

class API_SERVICE{
    private URL_BASE = "https://cdserver-r54a.vercel.app/"
    public getCategories = async():Promise<string[]>=>{
        const {data} = await axios.get(this.URL_BASE + "categories")
        return data
    }
    public getAllBusines = async():Promise<any[]>=>{
        const {data} = await axios.get(this.URL_BASE)
        return data
    }
    public getBusines = async(id:string):Promise<any[]>=>{
        const {data} = await axios.get(this.URL_BASE+ "details/" + id)
        return data
    }
}
export const apiService = new API_SERVICE()