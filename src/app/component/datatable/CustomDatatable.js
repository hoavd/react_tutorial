import React, {useState} from 'react';
import MUIDataTable, {debounceSearchRender} from "mui-datatables";
import CustomToolbar from "./CustomToolbar";
import {createTheme, ThemeProvider} from "@mui/material";

function CustomDatatable({data, columns, handleTableChange, count, title, handleAddOnclick}) {
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("700px");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("700px");
    const [searchBtn, setSearchBtn] = useState(true);
    const [viewColumnBtn, setViewColumnBtn] = useState(true);
    const [downloadBtn, setDownloadBtn] = useState(false);
    const [printBtn, setPrintBtn] = useState(false);
    const [filterBtn, setFilterBtn] = useState(false);

    const options = {
        selectableRowsHideCheckboxes: true,
        search: searchBtn,
        download: downloadBtn,
        print: printBtn,
        viewColumns: viewColumnBtn,
        filter: filterBtn,
        filterType: "dropdown",
        responsive,
        tableBodyHeight,
        tableBodyMaxHeight,
        onTableChange:
            (action, state) => {
                handleTableChange(action, state)
            },
        serverSide: true,
        customSearchRender: debounceSearchRender(500),
        count: count,
        customToolbar: handleAddOnclick ? () => <CustomToolbar handleAddOnclick={handleAddOnclick}/> : false
    };

    const getMuiTheme = () => createTheme({
        components: {
            MUIDataTableBodyCell: {
                styleOverrides: {
                    root: {
                        // '&:nth-child(2)': {
                        //     width: 100
                        // }
                    }
                }
            }
        }
    })

    return (
        <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
                title={title}
                data={data}
                columns={columns}
                options={options}
            />
        </ThemeProvider>

    );
}

export default CustomDatatable;