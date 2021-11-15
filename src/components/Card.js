import React from 'react'
import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import swal from 'sweetalert'

class card extends React.Component {


    state = {
        abierto: false,
        confirmacion:false
    }


    abrirModal = () => {
        this.setState({ abierto: !this.state.abierto });
    }
    modalConfirmacion = () => {
        this.setState({ confirmacion: !this.state.confirmacion });
    }

    mostrarAlerta=()=>{
        swal({
            title: "Compra Exitosa",
            text:"Gracias por Preferirnos",
            icon: "success",
            button: null,
            timer:"2000"
        });
    }

    render() {
        const modalStyles = {
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            border: "20%"
        }



        return (
            <>
                <div className="card bg-light mb-3" >
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title_card}</h5>
                        <div className="imagen">
                            <img src={this.props.imagen} alt="imagen iPhone"></img>
                        </div>
                        <div className="boton">
                            <Button color="success" onClick={this.abrirModal}>Detalles</Button>
                        </div>
                    </div>
                </div>


                <Modal isOpen={this.state.abierto} style={modalStyles} >
                    <ModalHeader >
                        <div className="titulo">
                            {this.props.titleModal}
                        </div>
                    </ModalHeader>

                    <ModalBody >
                        <div className="Body_Modal">
                            <div className="imagen_modal">
                                <img src={this.props.imagen} alt="imagen iPhone"></img>
                            </div>

                            <div className="Details card text-white bg-secondary mb-3">
                                <div className="Details__title">
                                    <h2>Detalles</h2>
                                </div>
                                <div className="Details_op">
                                    <div className="pulgadas">
                                        {this.props.pulgadas}
                                    </div>

                                    <div className="camara">
                                        {this.props.camara}
                                    </div>

                                    <div className="chip">
                                        {this.props.chip}
                                    </div>

                                    <div className="compatible">
                                        {this.props.compatible}
                                    </div>

                                    <div className="bateria">
                                        {this.props.bateria}
                                    </div>


                                </div>
                            </div>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="dark" onClick={this.mostrarAlerta}> Comprar</Button>
                        <Button color="danger" onClick={this.abrirModal}> Cerrar</Button>
                    </ModalFooter>
                </Modal>


                {/* <Modal isOpen={this.state.confirmacion}>
                    <ModalHeader >
                        <h3>Compra exitosa!!</h3>
                    </ModalHeader>
                    <ModalFooter>
                        <Button color="success" onClick={this.modalConfirmacion}>OK</Button>
                    </ModalFooter>
                </Modal> */}


            </>
        )
    }
}

export default card;