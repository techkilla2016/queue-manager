"use client"
import { Row, Col, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, PaginationTotalStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import axios from 'axios';
import { LuLayoutDashboard } from 'react-icons/lu';
import Image from 'next/image';
import { AiOutlinePlus } from 'react-icons/ai'
import InsertTemplate from '@/Components/model/insertTemplate'
const { SearchBar } = Search;


const Dashbord = () => {
    const [insertModalShow, setInsertModalShow] = useState(false);
    const [products, setProducts] = useState([]);
    const options = {
        custom: true,
        totalSize: products.length
    };


    const columns = [
        {
            dataField: 'sr',
            text: 'ID'
        },
        {
            dataField: 'catogary',
            text: 'Catogary'
        },
        {
            text: 'Color',
            formatter: (cell, row) => {
                return (
                    <div className='modelImage d-flex justify-content-center' >
                        <div className="colorBg" style={{ background: row.color }}></div>
                    </div>
                )
            }
        },

        {
            text: 'Model',
            formatter: (cell, row) => {
                return (
                    <div className='modelImage'>
                        <Image src={row?.model} width={1920} height={1080} />
                    </div>
                )
            }
        },
        {
            text: 'Actions',
            formatter: (cell, row) => {
                return (
                    <>
                        <Button variant="primary mx-3" onClick={() => handleButtonClick(row)}>
                            update
                        </Button>
                        <Button variant="danger" onClick={() => handleButtonClick(row)}>
                            delete
                        </Button>
                    </>
                )
            }
        }
    ];

    const getAllData = () => {
        axios.get(`https://mobile-server-ebon.vercel.app/template-all`)
            .then(res => {
                console.log(res)
                const data = res?.data?.data?.map((item, index) => ({
                    ...item,
                    sr: index + 1
                }));
                setProducts(data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function handleButtonClick(payload) {
        console.log(payload)
        axios.post(`https://mobile-server-ebon.vercel.app/delete-template`, { id: payload.id }).then(res => {
            console.log(res)
            getAllData()
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getAllData()
    }, []);

    return (
        <>
            <ToolkitProvider keyField="id" data={products} columns={columns} search>
                {props => (
                    <div>
                        <header>
                            <div className="header d-flex justify-content-between align-items-center">
                                <div className="Heading d-flex align-items-center">
                                    <strong className='px-3'>
                                        <span><LuLayoutDashboard /></span>
                                        <span className='px-2'>Dashboard</span>
                                    </strong>
                                </div>
                                <button className='btn btn-primary' onClick={() => setInsertModalShow(true)}>
                                    <AiOutlinePlus />
                                </button>
                            </div>
                        </header>
                        <div className="mt-4">
                            <PaginationProvider pagination={paginationFactory(options)}>
                                {({ paginationProps, paginationTableProps }) => (
                                    <div>
                                        <PaginationTotalStandalone {...paginationProps} defaultCurrent={1} defaultPageSize={10} />
                                        <div className="my-2">
                                            <BootstrapTable
                                                keyField="id"
                                                data={products}
                                                columns={columns}
                                                {...paginationTableProps}
                                            />
                                        </div>
                                        {products?.length > 10 ? <PaginationListStandalone {...paginationProps} /> : ''}
                                    </div>
                                )}
                            </PaginationProvider>
                        </div>
                    </div>
                )}
            </ToolkitProvider>
            <InsertTemplate
                show={insertModalShow}
                onHide={() => setInsertModalShow(false)}
            />
        </>
    );
};

export default Dashbord;
