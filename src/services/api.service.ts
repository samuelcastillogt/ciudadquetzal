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
    public getPosts = async()=>{
        const allPostsData:any[] = []
        const {data} = await axios.get(this.URL_BASE + "blog2")
        data.forEach((element:any )=> {
            const regex = /<img[^>]+src="([^">]+)"/;
            const match = regex.exec(element.content);
            const post = {
                data: element,
                img: match? match[1] : ""
            }
            allPostsData.push(post)
        });
        return allPostsData
    }
}
export const apiService = new API_SERVICE()