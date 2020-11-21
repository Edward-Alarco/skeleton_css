(function(){

    var propModal = {
        imgsLayout: document.getElementsByClassName('img-layout'),
        modalLayout: document.getElementById('modalLayout'),
        cuerpoDom: document.getElementsByTagName('body')[0],
        lightbox_container: null,
        modal: null,
        parrafo_codigo: null,
        cerrarModal: null,
        iconoCerrar: null,
    }
    
    var metModal = {
        inicio:function(){
            for (let i = 0; i < propModal.imgsLayout.length; i++) {
                propModal.imgsLayout[i].addEventListener('click',metModal.abrirModal);
            }
        },
        abrirModal:function(){
            //Se crea un div en el DOM, con su respectivo ID
            propModal.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
            //Se seleccion el div con el id
            propModal.lightbox_container = document.getElementById('lightbox_container');
            //Se le meten los distintos estilos
            //Estilos del Lightbox [Modal Gigante]
            propModal.lightbox_container.style.width = '100%';
            propModal.lightbox_container.style.height = '100%';
            propModal.lightbox_container.style.display = 'flex';
            propModal.lightbox_container.style.fontFamily = '"Poppins", sans-serif';
            propModal.lightbox_container.style.fontWeight = '500';
            propModal.lightbox_container.style.justifyContent = 'center';
            propModal.lightbox_container.style.alignItems = 'center';
            propModal.lightbox_container.style.position = 'fixed';
            propModal.lightbox_container.style.zIndex = '9000';
            propModal.lightbox_container.style.background = 'rgba(0,0,0,0.9)';
            propModal.lightbox_container.style.top = '0';
            propModal.lightbox_container.style.left = '0';
            //Al 1er DIV se le crea un nuevo DIV Hijo, con su respectivo ID
            propModal.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
            //Se selecciona el DIV Hijo
            propModal.modal = document.getElementById('modal');
            //Estilos
            propModal.modal.style.textAlign = 'left';
            propModal.modal.style.fontFamily = '"Poppins", sans-serif';
            propModal.modal.style.fontWeight = '500';
            propModal.modal.style.borderRight = '10px solid #3498db'
            propModal.modal.style.margin = '0 auto';
            propModal.modal.style.padding = '32px';
            propModal.modal.style.background = 'white';
            //Crear parrafo para codigo
            propModal.modal.appendChild(document.createElement('code')).setAttribute('id','code');
            propModal.parrafo_codigo = document.getElementById('code');
            propModal.parrafo_codigo.style.color = '#000';
            propModal.parrafo_codigo.style.fontSize = '16px';
            // propModal.parrafo_codigo.innerHTML = "<pre>"+code.tenCode+"</pre>";
    
    
            propModal.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id','cerrarModal');
            propModal.cerrarModal = document.getElementById('cerrarModal');
    
            propModal.cerrarModal.style.width = '50px';
            propModal.cerrarModal.style.height = '50px';
            propModal.cerrarModal.style.display = 'flex';
            propModal.cerrarModal.style.position = 'absolute';
            propModal.cerrarModal.style.justifyContent = 'center';
            propModal.cerrarModal.style.alignItems = 'center';
            propModal.cerrarModal.style.top = '0';
            propModal.cerrarModal.style.cursor = 'pointer';
            propModal.cerrarModal.style.right = '0';
            propModal.cerrarModal.style.margin = '16px';
            propModal.cerrarModal.style.backgroundColor = 'white';
    
            propModal.cerrarModal.appendChild(document.createElement('p')).setAttribute('id','iconoCerrar');
            propModal.iconoCerrar = document.getElementById('iconoCerrar');
            propModal.iconoCerrar.innerHTML = `<i class="fa fa-times" id="cerrar_modal" aria-hidden="true"></i>`;
            propModal.iconoCerrar.style.fontSize = '24px';
            propModal.iconoCerrar.style.color = '#3498db';
    
            propModal.cerrarModal.addEventListener('click',metModal.cerrarModal)
        },
        cerrarModal: function () {
            propModal.cuerpoDom.removeChild(propModal.lightbox_container);
        }
    }
    
    metModal.inicio();

}())