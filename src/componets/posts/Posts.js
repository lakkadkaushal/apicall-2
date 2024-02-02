import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Table } from "react-bootstrap";

import './Post.css';


function Posts() {

    let [value, setvalue] = useState([]);

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
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
            <div className="posts">
                <Table border={1} >
                    <tr>
                        <tr>
                            <th>UserId</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                        {
                            value.map((ele) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{ele.userId}</td>
                                            <td>{ele.id}</td>
                                            <td>{ele.title}</td>
                                            <td>{ele.body}</td>
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

export default Posts


