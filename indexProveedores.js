const boton = document.querySelector("#submit");
const tbody = document.querySelector("#tbody");

boton.addEventListener("click",consultarAPI);

async function consultarAPI(e){
    const buscador = document.querySelector("#buscador").value;
    const filtro_categoria = document.querySelector("#filtro").value;
    const orden = document.querySelector("#orden").value;

    e.preventDefault();

    let datos = new FormData();

    datos.append("buscador",buscador);
    datos.append("filtro_categoria",filtro_categoria);
    datos.append("orden",orden);

    let data = await fetch("./api-proveedores.php",{
        method:"POST",
        body:datos
    });

    let json = await data.json();

    mostrarDatosTabla(json);
}

function mostrarDatosTabla(json){

    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }

    json.forEach((obj)=>{
        const {idProveedor,razonSocial,ruc,telefono} = obj;

        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        const tdrazonSocial = document.createElement("td");
        const tdruc = document.createElement("td");
        const tdtelefono = document.createElement("td");
        const tdActualizarProveedor = document.createElement("td");
        const tdEliminarProveedor = document.createElement("td");

        const enlaceActualizarProveedor = document.createElement("a");
        const enlaceEliminarProveedor = document.createElement("a");

        tdId.textContent = idProveedor;
        tdrazonSocial.textContent = razonSocial;
        tdruc.textContent = ruc;
        tdtelefono.textContent=telefono;

        enlaceActualizarProveedor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="#0000FF" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
        </svg>`;
        enlaceEliminarProveedor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>`;

        enlaceActualizarProveedor.href = `./actualizarproveedores.php?id=${idProveedor}`;
        enlaceEliminarProveedor.href = `./eliminarproveedores.php?id=${idProveedor}`;

        console.log(enlaceActualizarProveedor);

        tr.appendChild(tdId);
        tr.appendChild(tdrazonSocial);
        tr.appendChild(tdruc);
        tr.appendChild(tdtelefono);
        tdActualizarProveedor.appendChild(enlaceActualizarProveedor);
        tdEliminarProveedor.appendChild(enlaceEliminarProveedor);
        tr.appendChild(tdActualizarProveedor);
        tr.appendChild(tdEliminarProveedor);

        tbody.appendChild(tr);

    });

}