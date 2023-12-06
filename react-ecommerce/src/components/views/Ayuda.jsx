import "../styles/Ayuda.css"

export const Ayuda = () => {
    return(
        <div className="divisorgap">
        <h1 className="textTitle__preg">Preguntas frecuentes</h1>

<details>
    <summary className="preg__list btn btn-outline-success">¿Cómo comprar?</summary>
        <p className="rta__list">Si estás interesado en productos individuales y separados, podrás escogerlos uno por uno y hacer click sobre “Añadir al carrito” y luego en “Finalizar compra”.</p>
</details>
<details>
    <summary className="preg__list btn btn-outline-success">Garantía</summary>
        <p className="rta__list">Todos los productos cuentan con garantía oficial del fabricante la cual esta detallada en cada uno.</p>
</details>
<details>
    <summary className="preg__list btn btn-outline-success">Envío</summary>
        <p className="rta__list">En primer lugar, para conocer el costo del envío, solo debes colocar tu código postal en el recuadro correspondiente luego de añadir al carrito, seleccionar la mensajería de tu preferencia y elegir si deseas el retiro en alguna sucursal o la entrega a domicilio. Actualmente realizamos envíos a todo el país través de Oca y Andreani. Tené en cuenta que, para calcular el costo del envío, se toman en consideración tanto las dimensiones y peso del paquete como la distancia de la localidad de entrega.</p>
</details>
<details>
    <summary className="preg__list btn btn-outline-success">Devolución</summary>
        <p className="rta__list">En caso de que no se tenga stock del producto llevado a garantía por el cliente y no desee otro a cambio, se podrá hacer la devolución que corresponda.</p>
</details>
<details>
    <summary className="preg__list btn btn-outline-success">Reembolso</summary>
        <p className="rta__list">No realizamos reembolsos.</p>
</details>
<details>
    <summary className="preg__list btn btn-outline-success">Metodos de pago</summary>
        <p className="rta__list">Contamos con los siguientes metodos de pago:
            <ul className="lista__list">    
                <li>Tarjetas (credito y debito).</li>
                <li>Mercado Pago.</li>
                <li>Efectivo y transferencia.</li>
            </ul>
        </p>

</details>
    </div>
    )
}