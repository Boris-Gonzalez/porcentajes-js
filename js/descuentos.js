/* const precioOriginal = 120;
const descuento = 18; */
function calcularPrecioConDescuento(precio, descuento){
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
return precioConDescuento;
};
function priceDiscount(){
    /* solicitamos los valores ingresado por el usuario con a traves del ID del la etiqueta input, luego con .value obatenemos solo el valor que el usuario ingreso */
/*     const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value; */

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    let descount;
    switch(couponValue){
        case "Cupon_1":
        descount = 15;
        break;
        case "Cupon_2":
        descount =  25;
        break;
        case "Cupon_3":
        descount = 30;
        break;
        default: 
        descount = 0;
        break;
    }
    const precioConDescuento = calcularPrecioConDescuento(10000, descount);
    if(descount == 0){
        const result = document.getElementById("result");
    result.innerText = "LO SENTIMOS ESTE CUPON NO ES VALIDO 😥"; 
    }else{
       const result = document.getElementById("result");
    result.innerText = "Genial 😄 tienes un cupon con descuento de " + descount + "% \nEl precio con descuento son $ " + precioConDescuento + ". "; 
    }
    
};
/* 
const coupon = [
    Cupon_1,
    Cupon_2,
    Cupon_3
]; */


/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}) */