import React from  'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';

class Clasemodal extends React.Component{
    state={
        abierto:false,
    }

    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto});
    }

    render(){

        const modalStyles={
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
        }
        return(
            <>
            <div className="principal">
                <div className="secundario">

                    <Button color="success" onClick={this.abrirModal}>Mostrar Modal</Button>
                </div>
            </div>


            <Modal isOpen={this.state.abierto} style={modalStyles}>
                <ModalHeader>
                    Iniciar Sesion
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <Label for="usuario">Usuario</Label>
                        <Input type="text" id="usuario"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Contraseña</Label>
                        <Input type="password" id="password"></Input>
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary">Iniciar Sesion</Button>
                    <Button color="secundary" onClick={this.abrirModal}> Cerrar</Button>

                </ModalFooter>
            </Modal>
            </>
        )
    }
}

export default Clasemodal;