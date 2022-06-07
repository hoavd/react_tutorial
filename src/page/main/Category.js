import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {findListCategory} from "../../action/Category";
import {toast} from "react-toastify";
import CustomMaterialPagination from "../../component/CustomMaterialPagination";
import DataTable from 'react-data-table-component';

function Category() {
    const [data, setData] = useState([]);
    const [max, setMax] = useState(10);
    const [offset, setOffset] = useState(0);
    const [order, setOrder] = useState('');
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('');

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'code', headerName: 'Code', width: 130},
        {field: 'name', headerName: 'Name', width: 130},
        {field: 'description', headerName: 'Description', width: 130},
    ];

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findListCategory(max, offset, order, query, sort)).then(resp => {
            setData(resp.payload.data.categoryList)
            // console.log(data)
        }).catch((err) => {
            toast.error(err.error.response.data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        })

    }, [max, offset, order, query, sort])
    console.log(data)

    return (
        <div>
            <table>
                <thead>

                <tr>
                    {columns.map(it =>
                        <th>{it.headerName}</th>
                    )}
                </tr>
                </thead>
                <tbody>
                {data.map(it =>
                    <tr>
                        <td>{it.id}</td>
                        <td>{it.code}</td>
                        <td>{it.name}</td>
                        <td>{it.name}</td>
                    </tr>
                )}
                </tbody>
            </table>
            {/*  <DataTable
               columns={columns}
               data={data}
               pagination
               paginationComponent={CustomMaterialPagination}
           />*/}
        </div>
    );
}

export default Category;