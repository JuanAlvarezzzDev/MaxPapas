import CreatePdf from "./CreatePdf";


const generateTicket = async (pedido, total, output = "print") => {
  const content = [
    // //DATOS EMPRESA
    // {
    //   image: ticket.image, //Logo
    //   fit: [141.73, 56.692],
    //   alignment: "center",
    // },
    //DATOS CEBECERA FACTURAR
    {
      margin: [0, 10, 0, 0],
      table: {
        widths: ["20%", "35%", "15%", "25%"],
        headerRows: 2,
        body: [
          [
            { text: "FECHA:", style: "tHeaderLabel", alignment: "left" },
            {
              text: new Date().toLocaleString(),
              style: "tHeaderValue",
              colSpan: 3,
              alignment: "left",
            },
            {},
            {},
          ],
          [
            { text: "PEDIDO:", style: "tHeaderLabel", alignment: "left" },
            {
              text: "001",
              style: "tHeaderValue",
              colSpan: 3,
              alignment: "left",
            },
            {},
            {},
          ],
          [
            { text: "CLIENTE", style: "tHeaderLabel", alignment: "left" },
            {
              text: "Camilo Alvarez",
              style: "tHeaderValue",
              colSpan: 3,
              alignment: "left",
            },
            {},
            {},
          ],
        ],
      },
      layout: "noBorders",
    },
    //TABLA PRODUCTOS
    {
      margin: [0, 10, 0, 0],
      table: {
        widths: ["50%", "10%", "20%", "20%"],
        headerRows: 2,
        body: [
          [
            { text: "Producto", style: "tProductsHeader", alignment: "left" },
            { text: "Cant", style: "tProductsHeader", alignment: "left" },
            { text: "Precio", style: "tProductsHeader", alignment: "left" },
            { text: "Total", style: "tProductsHeader", alignment: "left" },
          ],
          ...pedido.map(row => [
            { text: row.nombre, style: "tProductsBody", alignment: "left" },
            { text: row.cantidad.toString(), style: "tProductsBody", alignment: "left" },
            { text: row.precio, style: "tProductsBody", alignment: "left" },
            { text:(row.precio * row.cantidad), style: "tProductsBody", alignment: "left" },
          ]),

          [
            {},
            {},
            { text: "TOTAL:", style: "tTotals", alignment: "left"},
            { text: total, style: "tTotals", alignment: "left"},
          ],
        ],
      },
      layout: {
        hLineWidth: function (i, node) {
          return i === 2 ? 0.5 : 0;
        },
        vLineWidth: function (i, node) {
          return 0;
        },
        hLineColor: function () {
          return "#f2f0f0";
        },
        paddingTop: function (i, node) {
          return i % 2 === 0 ? 10 : 1;
        },
      },
    },
  ];

  const response = await CreatePdf({ content }, output);
  return response;
};

export default generateTicket;
