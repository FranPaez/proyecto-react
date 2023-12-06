import "../styles/SobreNosotros.css";

export const SobreNosotros = () => {
    return (
        <div>
            <h1 className="textTitle__preg">Algunas cosas sobre nosotros</h1>

            <details>
                <summary className="preg__list btn btn-outline-success">¿Quienes somos?</summary>
                <p className="rta__list">
                    En Capybara PC somos una tienda dedicados a a la venta de hardware,
                    perifericos y soluciones tecnicas de PC.
                </p>
            </details>
            <details>
                <summary className="preg__list btn btn-outline-success">¿Con que marcas trabajamos?</summary>
                <p className="rta__list">
                    Intel, Nvidia, AMD, Radeon, Zotak, HYPERX, Coolmaster, estas son
                    algunas de las marcas con las cuales trabajamos y las que creemos que
                    ofrecen las mejores opciones dentro del mundo del hardware.{" "}
                </p>
            </details>
            <details>
                <summary className="preg__list btn btn-outline-success">
                    ¿Cuales son los horarios de atencion?
                </summary>
                <ul className="lista__list">
                    <li>Lunes a viernes: 09am - 20pm</li>
                    <li>Sabados: 09am - 13pm</li>
                    <li>Domingos: cerrado</li>
                </ul>
            </details>
            <details>
                <summary className="preg__list btn btn-outline-success">
                    ¿Donde puedo contactar con ustedes?
                </summary>
                <p className="rta__list">
                    Pueden contactarnos via telefonica con estos medios:
                </p>
                <ul className="lista__list">
                    <li>Telefono: 47598435</li>
                    <li>WhatsApp: 1112841337</li>
                </ul>
                <p className="rta__list">Otra opcion donde pueden hacerlo es via mail:</p>
                <ul className="lista__list">
                    <li>Mail para ventas: ventascapybaraPC@gmail.com</li>
                    <li>Mail para proveedores: webcapybaraPC@gmail.com</li>
                </ul>
            </details>
            <details>
                <summary className="preg__list btn btn-outline-success">¿Cuales son sus redes sociales?</summary>
                <p className="rta__list">Estas son nuestras redes sociales: </p>
                <ul className="lista__list">
                    <li>
                        {" "}
                        <a
                            href="https://www.instagram.com/fran.leonell/?hl=es"
                            target="_blank"
                        >
                            Instagram
                        </a>{" "}
                    </li>
                    <li>
                        {" "}
                        <a href="https://twitter.com/fran_leonell" target="_blank">
                            Twitter{" "}
                        </a>{" "}
                    </li>
                    <li>
                        {" "}
                        <a href="https://www.facebook.com/frank1to5" target="_blank">
                            Facebook
                        </a>{" "}
                    </li>
                </ul>
            </details>
        </div>
    );
};
