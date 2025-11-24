//ejercicio de la clase (no funciona debido a la pagina no funciona)

//ir a la url: https://automationexercise.com/products
//hover del primer producto que encontramos
//click en el primer producto ver mas detalles
//click en el boton + (2 veces)
//seleccionar en el menu dropdown un nuevo tamaño
//click en el boton añadir al carrito
//verificar (expect) "Product successfully added to your shopping cart"
//click en boton continue shopping
//el modal debe no ser visible (modal es el pop-up que sale dentro de una pag)


//siempre la primera linea es esta relacionada al import (podemos copiarla de un test anterior)
import { test, expect } from '@playwright/test';
test('añadir producto al carrito', async ({ page }) => {

    //ir a la url: https://automationexercise.com/products
    await page.goto('//ir a la url: https://automationexercise.com/products');
    
    //hover del primer producto que encontramos
    //tenemos que buscar el elemento, en el ejemplo se ve que hay un id de una lista
    //recuerda que un id es unico, quiere decir que ningun otro elemento lo va a tener
    await page.hover('#homefeatured li >> nth=0');
    //recomendar buscar en la documentacion 'N-th element sector'

    //click en el primer producto ver mas detalles
    //para este ejemplo va a usar el mismo id del paso anterior 
    // con una etiqueta <a y con texto 'more' (es un span)
    await page.locator('#homefeatured a:has-text("More") >> nth=0').click;
    await expect(page).toHaveURL("https://automationexercise.com/index.php?id_product=1&controller=product");
    
    //click en el boton + (2 veces)
    await page.locator('.button-plus').click();
    await page.locator('.button-plus').click();
    
    //seleccionar en el menu dropdown un nuevo tamaño
    await page.locator('#group_1').selectOption('2');

    //click en el boton añadir al carrito
    await page.locator('button[name="Submit"]').click();
    
    //verificar (expect) "Product successfully added to your shopping cart"
    await expect(page.locator('#layer_cart')).toBeVisible();
    await expect(page.locator('#layer_cart')).toContainText('Product successfully added to your shopping cart');
    
    //click en boton continue shopping
    await page.locator('.button-container span >> nth=0').click();

    //el modal debe no ser visible (modal es el pop-up que sale dentro de una pag)
    await expect(page.locator('#layer_cart')).not.toBeVisible();
    //una forma:await expect(page.locator('#layer_cart')).toBeHidden();

})