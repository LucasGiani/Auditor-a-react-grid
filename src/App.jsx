import React, { useEffect } from "react";
import "./style.css";
var $ = require("jquery");
var jQuery = require("jquery");
import { FancyGridReact } from "fancygrid-react";

class App extends React.Component {
  // useEffect(() => {
  //   CreateGridEmpty();
  // }, []);

  CreateGridEmpty() {
    var self = this;
    var dataset = [];
    var grid = jQuery("#ListadoNovedades");

    grid
      .jqxGrid({
        data: dataset,
        datatype: "local",
        gridview: true,
        height: 414,
        width: 680,
        autoheight: true,
        auwidth: true,
        multiselect: false,
        rowNum: 10,
        rowList: [1, 5, 10, 20, 30],
        colNames: ["Id", "Última Novedad", "Localidad", "Tipo", "Nro Ensayo"],
        colModel: [
          { name: "Id", key: true, align: "center", hidden: true },
          {
            name: "FechaCarga",
            align: "center",
            sorttype: "date",
            datefmt: "yyyy/m/d h:i:s",
            width: 100
          },
          { name: "Localidad", align: "center", sorttype: "text", width: 110 },
          {
            name: "EstadoMaterial",
            align: "center",
            sorttype: "text",
            width: 110
          },
          { name: "NumeroEnsayo", align: "center", sorttype: "int", width: 70 }
        ],
        pager: "#pjmap",
        viewrecords: true,
        sortorder: "asc",
        sortname: "FechaCarga",
        shrinkToFit: true,
        forceFit: true,
        caption: "Últimas novedades",
        onSelectRow: function(id) {
          var lastSelectedRowId = self.RowGridSelected()
            ? self.RowGridSelected().Id
            : null;
          if (id && id !== lastSelectedRowId) {
            var rowSelected = jQuery(self.IdGrid).getRowData(id);
            self.FillSelectedRow(rowSelected);
            lastSelectedRowId = id;
          }
        }
      })
      .navGrid("#pjmap", {
        edit: false,
        add: false,
        del: false,
        search: false,
        refresh: false
      });
  }

  getConfig() {
    return {
      height: 400,
      width: 430,
      columns: [
        {
          index: "Id",
          title: "Id",
          key: true,
          align: "center",
          hidden: true
        },
        {
          index: "FechaCarga",
          title: "Última Novedad",
          align: "center",
          sorttype: "date",
          datefmt: "yyyy/m/d h:i:s",
          width: 120
        },
        {
          index: "Localidad",
          title: "Localidad",
          align: "center",
          sorttype: "text",
          width: 110
        },
        {
          index: "EstadoMaterial",
          align: "center",
          sorttype: "text",
          width: 110
        },
        {
          index: "NumeroEnsayo",
          title: "Nro Ensayo",
          align: "center",
          sorttype: "int",
          width: 90
        }
      ],
      data: [
        {
          FechaCarga: "Ted",
          Localidad: "Smith",
          EstadoMaterial: "Electrical Systems",
          NumeroEnsayo: 30
        },
        {
          FechaCarga: "Ed",
          Localidad: "Johnson",
          EstadoMaterial: "Energy and Oil",
          NumeroEnsayo: 35
        },
        {
          FechaCarga: "Sam",
          Localidad: "Williams",
          EstadoMaterial: "Airbus",
          NumeroEnsayo: 38
        },
        {
          FechaCarga: "Alexander",
          Localidad: "Brown",
          EstadoMaterial: "Renault",
          NumeroEnsayo: 24
        },
        {
          FechaCarga: "Nicholas",
          Localidad: "Miller",
          EstadoMaterial: "Adobe",
          NumeroEnsayo: 33
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <FancyGridReact config={this.getConfig()} />
      </div>
    );
  }
}

export default App;
