import React, { Component } from 'react'

export default class Operan extends Component {

    // gantiMakanan(makanan_baru) {
    //     this.setState({
    //         makanan: makanan_baru
    //     })
    // }


    render() {
        const { makanan, gantiMakanan } = this.props
        return (
            <div>
                <h2>Operan State yang menjadi Props : {makanan}</h2>
                <button onClick={() => gantiMakanan("Soto")}>Ganti Makanan</button>
            </div>
        )
    }
}
