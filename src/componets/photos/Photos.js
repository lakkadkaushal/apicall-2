import React, { useEffect, useState } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Photos.css'

function Photos() {

    const [value, setvalue] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setvalue(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (

        <div className="dd">

            {
                value.map((ele) => {
                    return (


                        <Card style={{ width: '18rem' }} className="jj">
                            <Card.Img variant="to" src={ele.url} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    {ele.title}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>


                    )
                })
            }


        </div >
    )
}
export default Photos