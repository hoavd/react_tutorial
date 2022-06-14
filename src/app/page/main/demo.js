import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {findListCategory} from "../../redux/action/Category";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import MUIDataTable,{ExpandButton} from "mui-datatables";
import {createTheme, Grid, TableCell, TableRow} from "@mui/material";
import CustomDatatable from "../../component/datatable/CustomDatatable";

function Demo() {

    const columns = [
        {
            name: "Delete",
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return (
                        <button onClick={(event) => {
                            console.log(event)
                            console.log(dataIndex)
                            console.log(rowIndex)
                        }}>
                            Delete
                        </button>
                    );
                }
            }
        },
        {
            name: "Edit",
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return (
                        <button onClick={() => window.alert(`Clicked "Edit" for row ${rowIndex} with dataIndex of ${dataIndex}`)}>
                            Edit
                        </button>
                    );
                }
            }
        },
        {
            name: "Name",
            options: {
                filter: true,
            }
        },
        {
            label: "Modified Title Label",
            name: "Title",
            options: {
                filter: true,
            }
        },
        {
            name: "Location",
            options: {
                filter: false,
            }
        },
        {
            name: "Age",
            options: {
                filter: true,
            }
        },
        {
            name: "Salary",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "Add",
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <button onClick={() => {
                            const { data } = this.state;
                            data.unshift(["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]);
                            this.setState({ data });
                        }}>
                            Add
                        </button>
                    );
                }
            }
        },
    ];

    const data = [
        {Name: "Gabby George", Title: "Business Analyst", Location: "Minneapolis", Age: 30, Salary: "$100,000"},
        {Name: "Aiden Lloyd", Title: "Business Consultant", Location: "Dallas", Age: 55, Salary: "$200,000"},
        {Name: "Jaden Collins", Title: "Attorney", Location: "Santa Ana", Age: 27, Salary: "$500,000"},
        {Name: "Franky Rees", Title: "Business Analyst", Location: "St. Petersburg", Age: 22, Salary: "$50,000"},
        {Name: "Aaren Rose", Title: "Business Consultant", Location: "Toledo", Age: 28, Salary: "$75,000"},
        {Name: "Blake Duncan", Title: "Business Management Analyst", Location: "San Diego", Age: 65, Salary: "$94,000"},
        {Name: "Frankie Parry", Title: "Agency Legal Counsel", Location: "Jacksonville", Age: 71, Salary: "$210,000"},
        {Name: "Lane Wilson", Title: "Commercial Specialist", Location: "Omaha", Age: 19, Salary: "$65,000"},
        {Name: "Robin Duncan", Title: "Business Analyst", Location: "Los Angeles", Age: 20, Salary: "$77,000"},
        {Name: "Mel Brooks", Title: "Business Consultant", Location: "Oklahoma City", Age: 37, Salary: "$135,000"},
        {Name: "Harper White", Title: "Attorney", Location: "Pittsburgh", Age: 52, Salary: "$420,000"},
        {Name: "Kris Humphrey", Title: "Agency Legal Counsel", Location: "Laredo", Age: 30, Salary: "$150,000"},
        {Name: "Frankie Long", Title: "Industrial Analyst", Location: "Austin", Age: 31, Salary: "$170,000"},
        {Name: "Brynn Robbins", Title: "Business Analyst", Location: "Norfolk", Age: 22, Salary: "$90,000"},
        {Name: "Justice Mann", Title: "Business Consultant", Location: "Chicago", Age: 24, Salary: "$133,000"},
        {Name: "Addison Navarro", Title: "Business Management Analyst", Location: "New York", Age: 50, Salary: "$295,000"},
        {Name: "Jesse Welch", Title: "Agency Legal Counsel", Location: "Seattle", Age: 28, Salary: "$200,000"},
        {Name: "Eli Mejia", Title: "Commercial Specialist", Location: "Long Beach", Age: 65, Salary: "$400,000"},
        {Name: "Gene Leblanc", Title: "Industrial Analyst", Location: "Hartford", Age: 34, Salary: "$110,000"},
        {Name: "Danny Leon", Title: "Computer Scientist", Location: "Newark", Age: 60, Salary: "$220,000"},
        {Name: "Lane Lee", Title: "Corporate Counselor", Location: "Cincinnati", Age: 52, Salary: "$180,000"},
        {Name: "Jesse Hall", Title: "Business Analyst", Location: "Baltimore", Age: 44, Salary: "$99,000"},
        {Name: "Danni Hudson", Title: "Agency Legal Counsel", Location: "Tampa", Age: 37, Salary: "$90,000"},
        {Name: "Terry Macdonald", Title: "Commercial Specialist", Location: "Miami", Age: 39, Salary: "$140,000"},
        {Name: "Justice Mccarthy", Title: "Attorney", Location: "Tucson", Age: 26, Salary: "$330,000"},
        {Name: "Silver Carey", Title: "Computer Scientist", Location: "Memphis", Age: 47, Salary: "$250,000" },
        {Name: "Franky Miles", Title: "Industrial Analyst", Location: "Buffalo", Age: 49, Salary: "$190,000"},
        {Name: "Glen Nixon", Title: "Corporate Counselor", Location: "Arlington", Age: 44, Salary: "$80,000"},
        {Name: "Gabby Strickland", Title: "Business Process Consultant", Location: "Scottsdale", Age: 26, Salary: "$45,000"},
        {Name: "Mason Ray", Title: "Computer Scientist", Location: "San Francisco", Age: 39, Salary: "$142,000"}
    ];

    const options = {
        filter: true,
        filterType: 'dropdown',
        responsive: 'vertical',
        onColumnSortChange: (changedColumn, direction) => console.log('changedColumn: ', changedColumn, 'direction: ', direction),
        onChangeRowsPerPage: numberOfRows => console.log('numberOfRows: ', numberOfRows),
        onChangePage: currentPage => console.log('currentPage: ', currentPage)
    };

    return (
        <Grid item xs={8}>
            <MUIDataTable
                title={'ACME Employee list'}
                data={data}
                columns={columns}
                options={options}
            />
        </Grid>
    );
}

export default Demo;