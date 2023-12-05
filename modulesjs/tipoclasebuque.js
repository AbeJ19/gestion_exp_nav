const data = {
    Tanque: `<option value="">Seleccionar</option>
             <option value="Gasero">Gasero</option>
             <option value="Granelero">Granelero</option>
             <option value="Containero">Containero</option>
             <option value="Petrolero">Petrolero</option>`,

    Pesca: `<option value="">Seleccionar</option>
            <option value="Polivalente">Polivalente</option>
            <option value="Artesanal">Artesanal</option>`,

    Servicio: `<option value="">Seleccionar</option>
               <option value="Recreacional">Recreacional</option>
               <option value="Traslado de Materiales">Traslado de Materiales</option>
               <option value="Traslado de personal">Traslado de personal</option>
               <option value="Transporte de personas">Transporte de personas</option>
               <option value="De pilotaje">De pilotaje</option>
               <option value="Transporte de Agua/lubricantes">Transporte de Agua/lubricantes</option>
               <option value="Desembarque de desechos no peligrosos">Desembarque de desechos no peligrosos</option>
               <option value="Buque remolcador">Buque remolcador</option>`,

    Deportivo: `<option value="">Seleccionar</option>
                <option value="Yate">Yate</option>
                <option value="Catamaran">Catamaran</option>
                <option value="Lancha">Lancha</option>`,

    Guerra: `<option value="">Seleccionar</option>
            <option value="Submarino">Submarino</option>
            <option value="Transporte">Transporte</option>
            <option value="Patrullero de combate">Patrullero de combate</option>
            <option value="Vigilancia litoral">Vigilancia litoral</option>
            <option value="Buque Escuela">Buque Escuela</option>`
            
  }

  const showSelect = (e) => {
    const selected = data[e.target.value] ?? '';
    const container = document.querySelector('#clasebuque').innerHTML = `<select name="clasebuque" id="clasebuque" class="form-control">${selected}</select>`
  }
  document.addEventListener("DOMContentLoaded", ()=> {
    const select = document.querySelector('#tipobuque');
    select.addEventListener("change", showSelect);
  });