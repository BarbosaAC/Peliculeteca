

export const saveItemLocalStorage = item =>{
    localStorage.setItem('list', JSON.stringify([...JSON.parse(localStorage.getItem('list')) || [] ,item]) || JSON.stringify([item]));
    console.log("Se almaceno el elemnto");
};

export const loadDataLocalStorage = () => {
    return JSON.parse(localStorage.getItem('list')) || [];
};

export const removeItemLocalStorage = removeItem => {
    console.log(removeItem);
    localStorage.setItem('list',JSON.stringify(JSON.parse(localStorage.getItem('list')).filter(item => item.titulo !== removeItem)));
}