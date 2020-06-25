export class Http {

    protected url = 'https://ac94f5097643.ngrok.io/clase/public/api/';

   public async post(data: any, method: string){
       try {
           
       } catch (e) {
           let response = await fetch( this.url + method, {
               method: 'POST',
               headers: {
                   Accept: 'application/json',
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(data)
           });

           return response;
       }
    }

    public async get(method: string){
       console.log("Im here")
        try {
            console.log("Im here too", this.url + method)
            let response = await fetch( this.url + method, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then(response => response.json())
                .then(responseJson => {
                    //console.log(responseJson);
                    return responseJson;
                })

            return response
        } catch (e) {
            console.log("Error ", e);
        }
    }
}

export default Http