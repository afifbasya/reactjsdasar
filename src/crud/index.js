import React, { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";
import Formulir from "./Formulir";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const makananYangSelainDiPilih = this.state.makanans
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });

        this.setState({
            makanans: [
              ...makananYangSelainDiPilih,
              {
                id: this.state.makanans.length + 1,
                nama: this.state.nama,
                deskripsi: this.state.deskripsi,
                harga: this.state.harga,
              },
            ],
          });
    }

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };

  editData = (id) => {
    const makananYangDiPilih = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => {
        return filterMakanan;
      });

    this.setState({
      nama: makananYangDiPilih[0].nama,
      deskripsi: makananYangDiPilih[0].deskripsi,
      harga: makananYangDiPilih[0].harga,
      id: makananYangDiPilih[0].id,
    });
  };

  hapusData = (id) => {
    const makananBaru = this.state.makanans
    .filter((makanan) => makanan.id !== id)
    .map((filterMakanan) => {
      return filterMakanan;
    });

    this.setState({
        makanans : makananBaru
    })

  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Tabel makanans={this.state.makanans} editData={this.editData} hapusData={this.hapusData} />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
