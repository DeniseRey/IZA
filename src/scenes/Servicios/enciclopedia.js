let info

export async function getInfo(callback) {
    localStorage.clear();
    
    return await fetch("https://iza-api.onrender.com/butterflies", {mode: 'no-cors'})
    .then(response => response.text())
    .then(data => {
        const promise1 = Promise.resolve(data ? JSON.parse(data) : {})
        
        promise1.then(data2=>{
            console.log(data)
            localStorage.setItem('info', JSON.parse(data[0]));
            info = data;
            console.log(info)
        })
      
    if(callback) callback()
    });
}

export function getParrafo(key) {
   
    return info;
}