import {Server} from "miragejs";

export const  dropoutServer  =(params)=> {

    return new Server({
        routes(){
            this.namespace="/";
            this.get("/mentor",(schema,request)=>{
                {
                    return {name:'het'}
                }
            })
        }
    })
    
}