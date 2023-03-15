import { Carpeta, Foto, Video } from '../src/index';

describe('testing index file', () => {
  test('Agregar archivos a la carpeta', () => {
    var carpeta1 = new Carpeta("carpeta1");

    var foto1 = new Foto("foto1", "tamanio1", "jpg", "1x1");
    var foto2 = new Foto("foto2", "tamanio2", "jpg", "2x2");
    var video1 = new Video("video1", "tamanio3", "mp4", "5mins");

    carpeta1.agregaralista(foto1);
    carpeta1.agregaralista(foto2);
    carpeta1.agregaralista(video1);

    expect(carpeta1.mostrarlista()).toEqual([ 'foto1', 'foto2', 'video1' ]);
  });
});

describe('testing index file', () => {
  test('Mostrar carpeta vacia', () => {
    var carpeta1 = new Carpeta("carpeta1");
    
    expect(carpeta1.mostrarlista()).toEqual([ ]);
  });
});

describe('testing index file', () => {
  test('carpeta dentro de carpeta', () => {
    var carpeta1 = new Carpeta("carpeta1");
    var carpeta2 = new Carpeta("carpeta2");

    carpeta1.agregaralista(carpeta2);
    
    expect(carpeta1.mostrarlista()).toEqual([ "carpeta2" ]);
  });
});

