import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {deleteCategory, findListCategory} from "../../../redux/action/Category";
import {toast} from "react-toastify";
import Button from '@mui/material/Button';
import {Dialog, DialogTitle, Grid, DialogContent, DialogActions, DialogContentText, Tooltip} from "@mui/material";
import CustomDatatable from "../../../component/datatable/CustomDatatable";
import {useNavigate} from "react-router-dom";
import {Done, Error} from "@mui/icons-material";


function Category() {
    const [data, setData] = useState([]);
    const [max, setMax] = useState(10);
    const [offset, setOffset] = useState(0);
    const [order, setOrder] = useState('');
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('');
    const [reloadTable, setReloadTable] = useState(false);
    const [rowData, setRowData] = useState(null);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleAddOnclick = (() => {
        navigate('/category/create');
    });

    const handleAccept = async () => {
        await dispatch(deleteCategory(rowData.rowData[0])).then(resp => {
            console.log(resp)
            if (resp.payload.data.success) {
                toast.success(resp.payload.data.msg, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                toast.error(resp.payload.data.msg, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            setReloadTable(!reloadTable)
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
        navigate(`/category/edit/${tableMeta.rowData[0]}`);
    }

    const handleTableChange = ((action, state) => {
            // console.log(action)
            // console.log(state)
            if (action === 'search') {
                setQuery(state.searchText ? state.searchText : '')
            } else if (action === 'changeRowsPerPage') {
                setMax(state.rowsPerPage ? state.rowsPerPage : 10)
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

    const getListCategory = async () => {
        console.log(1)
        await dispatch(findListCategory(max, offset, order, query, sort)).then(resp => {
            setData(resp.payload.data)
        }).catch((err) => {
            toast.error(err.error.response.data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        })
    }

    const dispatch = useDispatch()
    useEffect(() => {
        getListCategory()
    }, [max, offset, order, query, sort, reloadTable])

    const columns = [
        {
            name: "id",
            label: "ID",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "code",
            label: "Mã danh mục",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "name",
            label: "Tên danh mục",
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
                                <Done color="primary" />
                            </Tooltip>
                        );
                    else
                        return (
                            <Tooltip title="Ngừng hoạt động">
                                <Error color="error" />
                            </Tooltip>
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
                            <Button style={{border: "0px", padding: "0px"}} variant="outlined" color="primary"
                                    onClick={(event) => {
                                        editRow(tableMeta)
                                    }}>
                                <i className="fas fa-pencil-alt"/>
                            </Button>

                            <Button style={{border: "0px", padding: "0px"}} variant="outlined" color="error"
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
            <CustomDatatable data={data.categoryList} columns={columns}
                             handleTableChange={handleTableChange}
                             handleAddOnclick={handleAddOnclick}
                             count={data.categoryTotal}
                             title={"Danh mục động"}/>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Xóa</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Bạn chắc chắn muốn xóa bản ghi này này?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAccept}>Đồng ý</Button>
                    <Button onClick={handleClose}>Không</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}

export default Category;