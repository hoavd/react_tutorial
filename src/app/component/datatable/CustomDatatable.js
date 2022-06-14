import React, {useState} from 'react';
import MUIDataTable, {debounceSearchRender} from "mui-datatables";
import CustomToolbar from "./CustomToolbar";

function CustomDatatable({data, columns, handleTableChange, count, title, handleAddOnclick}) {
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("600px");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("600px");
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

    return (
        <MUIDataTable
            title={title}
            data={data}
            columns={columns}
            options={options}
        />
    );
}

export default CustomDatatable;