documento . querySelector ( '#submit' ) . addEventListener ( 'click' , function ( ) {
    
    dejar  cliente  =  documento . querySelector ( '#cliente' ) . valor ;
    let  fecha  =  document . querySelector ( '#fecha' ) . valor ;
    dejar  hora  =  documento . querySelector ( '#hora' ) . valor ;
    let  barbero  =  documento . querySelector ( '#barbero' ) . valor ;
    dejar  servicio  =  documento . querySelector ( '#servicio' ) . valor ;

    let  url  =  "https://api.whatsapp.com/send?phone=573229299191&text=*_Rigu Sublimacion _ *% 0A * Compras *% 0A% 0A * ¿Cual es tu nombre? *% 0A"  +  cliente  +  "% 0A * Indica la fecha de tu pedido *% 0A "  +  fecha  +  "% 0A * Indica la hora de tu pedido *% 0A "  +  hora  +  "% 0A * Selecciona la entrega de tu pedido *% 0A "  +  entregas  +  "% 0A * ¿ ¿Cuál es el servicio que se desea realizar? *% 0A "  +  servicio ;
    ventana . abierto ( url ) ;
