'use client'
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPlusSquareDotted } from 'react-icons/bs'
function InsertTemplate(props) {
    console.log(props)
    const formInit = {
        color: '',
        category: '',
        template: ""
    }
    const [formData, setFormData] = useState(formInit)
    const handleChange = ({ target }) => {
        const { name } = target
        if (name === 'template') {
            const { files } = target
            const file = files[0]
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                const value = reader.result;
                setFormData({
                    ...formData,
                    [name]: value
                });
            };

        } else {
            const { value } = target
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }
    const handleSubmit = async (onHide) => {
        try {
            const submitData = new FormData()
            submitData.append('template', formData?.template)
            submitData.append('color', formData?.color)
            const res = await axios.post('https://mobile-server-ebon.vercel.app/date-template', submitData)
            setFormData(formInit)
            onHide()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Tempalate
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <Row>
                        <Col>
                            <input type="text" placeholder='Color' name='color' value={formData?.color} onChange={handleChange} className='form-control' />
                        </Col>
                    </Row>
                    <Row className='pt-3'>
                        <Col>
                            <input type="file" name="template" id="file" onChange={handleChange} className='d-none' />
                            <label htmlFor="file" className='filePrivew'>
                                {
                                    formData?.template ? <Image src={formData?.template} width={1920} height={1080} /> : <BsPlusSquareDotted />
                                }
                            </label>
                        </Col>
                    </Row>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => handleSubmit(props.onHide)}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default InsertTemplate