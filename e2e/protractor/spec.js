describe('Prueba flujo principal', function() {
    it('should have a title', function() {
      browser.get('http://localhost:4200/');
      console.log(browser.getTitle());
      expect(browser.getTitle()).toEqual('');
    });
  });

describe('Boton Guardar', function() {
    it('boton guardar', function() {
      browser.get('http://localhost:4200/');
      element(by.id('agregarMedicamento')).click();
      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/medicamento-form'); 
    });
  });

  describe('Agregar medicamento', function() {
    it('guardar', function() {
      browser.get('http://localhost:4200/cliente-form');
      element(by.id('nombreMedicamento')).sendKeys("acetato");
      element(by.id('codigoMedicamento')).sendKeys("aaaCodigo");
      element(by.buttonText('Guardar')).click();
      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/agregar-medicamento'); 
    });
  });

  describe('Comprar', function() {
    it('comprar', function() {
      browser.get('http://localhost:4200/compra-form');
      element(by.id('codigoMedicamento')).sendKeys("aaaCodigo");
      element(by.id('numeroIdentidad')).sendKeys(22334);
      element(by.id('edad')).sendKeys(31);
      element(by.id('medioPago')).sendKeys("efectivo");
      element(by.id('recetaMedica')).sendKeys(true);
      element(by.id('cantidad')).sendKeys(1);
      element(by.buttonText('Comprar')).click();
      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/'); 
    });
  });

  describe('Boton Comprar', function() {
    it('comprar', function() {
      browser.get('http://localhost:4200/');
      element(by.id('CrearPelicula')).click();
      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/pelicula-form'); 
    });
  });

  describe('Prueba borrar', function() {
    it('borrar', function() {
      browser.get('http://localhost:4200/compra-form');
      element(by.id('codigoMedicamento')).sendKeys("aaaCodigo");
    
      element(by.buttonText('Comprar')).click();
      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/'); 
    });
  });

