const getKey = (str) => {
    let id = 0;
  
    for (let i = 0; i < str.length; i++) {
        id += str.charCodeAt(i);
    }
    
    id = Math.round(id * Math.random() * 100);
    
    return String(id);
}

export default getKey;