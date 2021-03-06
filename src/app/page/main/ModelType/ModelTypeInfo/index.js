import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {deleteModelTypeInfo, findListModelTypeInfo} from "../../../../redux/action/ModelTypeInfo";
import {toast} from "react-toastify";
import Button from '@mui/material/Button';
import {Grid, Tooltip} from "@mui/material";
import CustomDatatable from "../../../../component/datatable/CustomDatatable";
import {useNavigate, useParams} from "react-router-dom";
import {Done, Error} from "@mui/icons-material";
import DialogConfirmation from "../../../../component/common/DialogConfirmation";
import {hideLoading, showLoading} from "react-redux-loading-bar";


function ModelTypeInfo() {
    const [data, setData] = useState([]);
    const [max, setMax] = useState(10);
    const [offset, setOffset] = useState(0);
    const [order, setOrder] = useState('');
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('');
    const [rowData, setRowData] = useState(null);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const {modelTypeId} = useParams();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleAddOnclick = (() => {
        navigate(`/modelType/${modelTypeId}/modelTypeInfo/create`);
    });

    const handleAccept = async () => {
        await dispatch(deleteModelTypeInfo(rowData.rowData[0])).then(resp => {
            if (resp.payload.data.success) {
                toast.success(resp.payload.data.msg, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                toast.error(resp.payload.data.msg, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            getListModelTypeInfo()
        }).catch((err) => {
            toast.error(err.error.response.data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        })
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const deleteRow = (tableMeta) => {
        handleClickOpen()
        setRowData(tableMeta)
    }
    const editRow = (tableMeta) => {
        navigate(`/modelTypeInfo/edit/${tableMeta.rowData[0]}`);
    }

    const handleTableChange = ((action, state) => {
            // console.log(action)
            // console.log(state)
            if (action === 'search') {
                setQuery(state.searchText ?? '')
            } else if (action === 'changeRowsPerPage') {
                setMax(state.rowsPerPage ?? 10)
            } else if (action === 'changePage') {
                setOffset(state.rowsPerPage * (state.page))
            } else if (action === 'sort') {
                if (state.sortOrder) {
                    setSort(state.sortOrder.name)
                    setOrder(state.sortOrder.direction)
                }
            }
        }
    );

    const getListModelTypeInfo = async () => {
        dispatch(showLoading())

        await dispatch(findListModelTypeInfo(modelTypeId, max, offset, order, query, sort)).then(resp => {
            setData(resp.payload.data)
        }).catch((err) => {
            toast.error(err.error.response.data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        })
        dispatch(hideLoading())
    }

    const dispatch = useDispatch()
    useEffect(() => {
        getListModelTypeInfo()
    }, [max, offset, order, query, sort])

    const columns = [
        {
            name: "id",
            label: "ID",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "code",
            label: "M??",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "name",
            label: "T??n",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "description",
            label: "Di???n gi???i",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "status",
            label: "Tr???ng th??i",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    if (value)
                        return (
                            <Tooltip title="Ho???t ?????ng">
                                <Done color="primary"/>
                            </Tooltip>
                        );
                    else
                        return (
                            <Tooltip title="Ng???ng ho???t ?????ng">
                                <Error color="error"/>
                            </Tooltip>
                        );
                }
            }
        },
        {
            name: "Thao t??c",
            options: {
                filter: false,
                sort: false,
                empty: true,

                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>
                            <Button style={{border: "0px", padding: "5px", minWidth: "unset"}} variant="outlined" color="primary"
                                    onClick={(event) => {
                                        editRow(tableMeta)
                                    }}>
                                <i className="fas fa-pencil-alt"/>
                            </Button>

                            <Button style={{border: "0px", padding: "5px", minWidth: "unset"}} variant="outlined" color="error"
                                    onClick={(event) => {
                                        deleteRow(tableMeta)
                                    }}>
                                <i className="fas fa-trash"/>
                            </Button>
                        </>
                    );
                }
            }
        },
    ];

    return (
        <Grid item xs={8}>
            <CustomDatatable data={data.modelTypeInfoList} columns={columns}
                             handleTableChange={handleTableChange}
                             handleAddOnclick={handleAddOnclick}
                             count={data.modelTypeInfoTotal}
                             title={"M?? h??nh"}/>

            <DialogConfirmation open={open} title={"X??a"}
                                handleAccept={handleAccept}
                                handleClose={handleClose}
                                content={"B???n ch???c ch???n mu???n x??a b???n ghi n??y n??y?"}
            />
        </Grid>
    );
}

export default ModelTypeInfo;