import { browser, element, by} from 'protractor';
import { doesNotThrow } from 'assert';

describe('Prueba flujo principal', function() {
  it('should have a title', function() {
    browser.get('http://localhost:4200/');
    console.log(browser.getTitle());
    expect(browser.getTitle()).toEqual('Farmacia Ceiba');
  });
});

describe('Routing Agregar Medicamento', function() {
  it('boton agregar medicamento', function() {
    browser.get('http://localhost:4200/');
    element(by.id('router-agregar-medicamento')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/medicamento/agregar'); 
  });
});

describe('Agregar medicamento', function() {
  it('guardar medicamento', function() {
    browser.get('http://localhost:4200/medicamento/agregar');
    element(by.id('nombreMedicamento')).sendKeys("acetato");
    element(by.id('codigoMedicamento')).sendKeys("aaaCodigo");
    element(by.id('agregar-medicamento')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/medicamento/agregar');
  });
}); 

describe('Borrar medicamento', function(){
  it('borrar medicamento', function(){
    browser.get('http://localhost:4200/medicamento/borrar');
    element(by.id('borrar-medicamento')).sendKeys(1234);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/medicamento/borrar');    
  });
});

describe('Routing Borrar Medicamento', function() {
  it('boton borrar medicamento', function() {
    browser.get('http://localhost:4200/');
    element(by.id('borrar-medicamento')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/medicamento/borrar'); 
  });
});

describe('Comprar medicamento', function() {
  it('comprar medicamento', function() {
    browser.get('http://localhost:4200/medicamento/comprar');
    element(by.id('codigoMedicamento')).sendKeys("aaaCodigo");
    element(by.id('numeroIdentidad')).sendKeys(123123);
    element(by.id('edad')).sendKeys(56);
    element(by.id('medioPago')).sendKeys("efectivo");
    element(by.id('recetaMedica')).sendKeys('true');
    element(by.id('cantidad')).sendKeys(1);

    element(by.id('comprar-medicamento')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/medicamento/comprar');
  }); 
}); 

describe('Routing Comprar Medicamento', function() {
  it('boton comprar medicamento', function() {
    browser.get('http://localhost:4200/');
    element(by.id('comprar-medicamento')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/medicamento/comprar'); 
  });
});

describe('Historial compras', function(){
  it('historial compras', function(){
    browser.get('http://localhost:4200/comprar/historialCompras');
    expect(element(by.id('codigoMedicamento')).getText()).toEqual('Codigo Medicamento');
    expect(element(by.id('numeroIdentidad')).getText()).toEqual('Numero Identidad');
    expect(element(by.id('edad')).getText()).toEqual('Edad');
    expect(element(by.id('medioPago')).getText()).toEqual('Medio Pago');
    expect(element(by.id('recetaMedica')).getText()).toEqual('Receta Medica');
    expect(element(by.id('cantidad')).getText()).toEqual('Cantidad');
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/comprar/historialCompras');    
    
  });
});

