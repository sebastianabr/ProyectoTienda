<?php
ob_start();

require "./includes/funciones/conexion.php";
require "./includes/funciones/funciones.php";



?>

<div class="contenedor-agregar-producto">
    <div class="agregar-producto">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="12" x2="15" y2="12" />
  <line x1="12" y1="9" x2="12" y2="15" />
</svg>
        <a href="./agregarproveedores.php">Agregar</a>
    </div>
</div>

<form method="POST">
<div class="contenedor-filtrar-producto">
    <div class="contenedor-buscar-producto">
        <input type="text" placeholder="Buscar" id="buscador">
        <select id="filtro" name="filtro">
            <option value="idProveedor">Id</option>
            <option value="razonSocial">Razon Social</option>
            <option value="ruc">RUC</option>
        </select>

        <input type="submit" value="Buscar" id="submit">
    </div>

    <div class="contenedor-ordenar-producto">
        <label>Ordenar por:</label>
        <select id="orden" name="orden">
            <option value="DESC">Mayor a menor</option>
            <option value="ASC">Menor a mayor</option>
        </select>
    </div>
</div>
</form>

<div class="contenedor-tabla">
    <table class="tabla">
        <thead>
            <tr>
                <th>ID PROVEEDOR</th>
                <th>RAZON SOCIAL</th>
                <th>RUC</th>
                <th>TELEFONO</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody id="tbody">
            
        </tbody>
    </table>
</div>

<?php
$contenido = ob_get_clean();

require "./includes/layout/menulayout.php";
?>

<script src="./indexProveedores.js"></script>