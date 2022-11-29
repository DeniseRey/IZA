let info = null

export async function getInfo() {
    localStorage.removeItem("info");
    
    return await fetch("https://iza-api.onrender.com/butterflies")
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('info', JSON.stringify(data));
        info = data;
    })
}

function getLocalInfo(){
    if (!info){
        const data = localStorage.getItem("info");
        info = data ? JSON.parse(data) : [];
    }
    return info
}

export function getPageCount(){
    const data = getLocalInfo()
    return data.length
}

export function getPageInfo(pageNumber){
    const data = getLocalInfo()
    return data[pageNumber -1]

}

