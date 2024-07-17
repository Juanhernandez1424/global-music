export class CartProduct {
  public contadorProductos = 0;
  constructor(
    public idProducto: number,
    public imagen: string,
    public nombre: string,
    public marca: string,
    public modelo: string,
    public color: string,
    public precio: number
  ) {
    this.contadorProductos = ++this.contadorProductos + idProducto;
    this.imagen = imagen;
    this.nombre = nombre;
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.precio = precio;
  }
}
