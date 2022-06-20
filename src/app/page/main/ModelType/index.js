import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {deleteModelType, findListModelType} from "../../../redux/action/ModelType";
import {toast} from "react-toastify";
import Button from '@mui/material/Button';
import {Grid, Tooltip} from "@mui/material";
import CustomDatatable from "../../../component/datatable/CustomDatatable";
import {useNavigate} from "react-router-dom";
import {Done, Error} from "@mui/icons-material";
import DialogConfirmation from "../../../component/common/DialogConfirmation";
import {hideLoading, showLoading} from "react-redux-loading-bar";


function ModelType() {
    const [data, setData] = useState([]);
    const [max, setMax] = useState(10);
    const [offset, setOffset] = useState(0);
    const [order, setOrder] = useState('');
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('');
    const [rowData, setRowData] = useState(null);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleAddOnclick = (() => {
        navigate('/modelType/create');
    });

    const handleAccept = async () => {
        await dispatch(deleteModelType(rowData.rowData[0])).then(resp => {
            if (resp.payload.data.success) {
                toast.success(resp.payload.data.msg, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                toast.error(resp.payload.data.msg, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            getListModelType()
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
        navigate(`/modelType/edit/${tableMeta.rowData[0]}`);
    }

    const goModelTypeInfo = (tableMeta) => {
        navigate(`/modelType/${tableMeta.rowData[0]}/modelTypeInfo`);
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

    const getListModelType = async () => {
        dispatch(showLoading())

        await dispatch(findListModelType(max, offset, order, query, sort)).then(resp => {
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
        getListModelType()
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
            label: "Mã",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "name",
            label: "Tên",
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            name: "description",
            label: "Diễn giải",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "status",
            label: "Trạng thái",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    if (value)
                        return (
                            <Tooltip title="Hoạt động">
                                <Done color="primary"/>
                            </Tooltip>
                        );
                    else
                        return (
                            <Tooltip title="Ngừng hoạt động">
                                <Error color="error"/>
                            </Tooltip>
                        );
                }
            }
        },
        {
            name: "Model Type Info",
            options: {
                filter: false,
                sort: false,
                empty: true,

                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>
                            <Button style={{border: "0px", padding: "0px"}} variant="outlined" color="primary"
                                    onClick={(event) => {
                                        goModelTypeInfo(tableMeta)
                                    }}>
                                <i className="fas fa-share"/>
                            </Button>
                        </>
                    );
                }
            }
        },
        {
            name: "Thao tác",
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
            <CustomDatatable data={data.modelTypeList} columns={columns}
                             handleTableChange={handleTableChange}
                             handleAddOnclick={handleAddOnclick}
                             count={data.modelTypeTotal}
                             title={"Mô hình"}/>

            <DialogConfirmation open={open} title={"Xóa"}
                                handleAccept={handleAccept}
                                handleClose={handleClose}
                                content={"Bạn chắc chắn muốn xóa bản ghi này này?"}
            />
        </Grid>
    );
}

export default ModelType;