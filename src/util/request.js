export const sendDataToAPI = (data) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(this.readyState === 4 && this.status ===200){
            console.log(this.responseText);
        }
    }
        request.open('POST','https://en66nzzcy55h6.x.pipedream.net/', true );
        request.send(JSON.stringify(data));
}

export const sendDataToAPIFetch = (data) => {

    var config ={
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }
    fetch ('https://en66nzzcy55h6.x.pipedream.net/', config)
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(jsonData => console.log(jsonData));
}

export const findMovies = (query, callback) => {
    console.log("find");
    const request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(this.readyState === 4 && this.status ===200){
            const response = JSON.parse(this.responseText);
            if(response.Response){
                const data = response.Search;
                callback(data);
                console.log(data);
            }
        }
    }
        request.open('GET','http://www.omdbapi.com/?s='+ query +'&apikey=f8793092',true);
        request.send();
}