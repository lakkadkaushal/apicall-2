import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Table } from "react-bootstrap";

import './Album.css'


function Album() {
    let [value, setvalue] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setvalue(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [])
    return (
        <>
            <div className="album">

                <Table border={1} >
                    <tr>
                        <tr>
                            <th>UserId</th>
                            <th>ID</th>
                            <th>Title</th>
                        </tr>
                        {
                            value.map((ele) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{ele.userId}</td>
                                            <td>{ele.id}</td>
                                            <td>{ele.title}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }

                    </tr>
                </Table>

            </div>
        </>
    )
}

export default Album;