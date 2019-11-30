


function ajax(url){

    // console.log('ajax...')

    return new Promise(function(resovle,reject){

        let xhr = new XMLHttpRequest()

        xhr.open("GET",url);
    
        xhr.send(null)
    
        xhr.onreadystatechange = function(){
    
            // console.log(xhr.readyState,xhr.status)
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    // console.log(xhr.response)
                    resovle(xhr.response)
                }
            }
         
        }

    })

}