const getClasses = (classes) =>
  classes
    .filter((item) => item !== "")
    .join(" ")
    .trim();

const shorten = (title) => {
  const titleSplit = title.split(" ");
  const newTitle = `${titleSplit[0]}`;
  return newTitle
}


const isInCart = (cart , id) => {
  const result = (!!cart.products.find(item => item.id === id));
  return result

}


const quantityCounter = (cart , id) => {
  const index = cart.products.findIndex(item => item.id === id);
  if(index === -1){
    return false ;
  }else{
    return cart.products[index].quantity;
  }
}

export { getClasses , shorten , isInCart , quantityCounter }
