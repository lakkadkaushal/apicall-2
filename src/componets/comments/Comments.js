import React, { useEffect, useState } from "react";
import './Comments.css'
import axios from 'axios';
import { Table } from "react-bootstrap";



function Comments() {

    let [value, setvalue] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
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
            <div className="comments">

                <Table border={1} >
                    <tr>
                        <tr>
                            <th>PostId</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>
                        {
                            value.map((ele) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{ele.postId}</td>
                                            <td>{ele.id}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.email}</td>
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

export default Comments