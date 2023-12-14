import React, { Component } from "react";
import Keranjang from "../Keranjang/Modal";

class Content1 extends Component {
  render() {
    return (
      <div className="container mt-4">
        {/* OffCanvas sebelah kanan */}
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
          style={{ width: "30%" }}
        >
          <div class="offcanvas-header ">
            <h5
              className="fw-semibold"
              id="offcanvasRightLabel"
              style={{ color: "#fa9200" }}
            >
              CART
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div class="offcanvas-body">
            <Keranjang />
          </div>
        </div>
        {/*  */}
        <h4 className="text-center fw-semibold" style={{ color: "#fa9200" }}>
          Payment Confirmation
        </h4>
        <form>
          <div className="mb-3">
            <label for="inputOrderID" className="form-label mt-3">
              Order ID
            </label>
            <input
              type="number"
              className="form-control"
              id="inputOrderID"
              aria-describedby="inputOrderID"
            />
            <label for="namaRekening" className="form-label mt-3">
              Nama Rekening
            </label>
            <input
              type="text"
              className="form-control"
              id="namaRekening"
              aria-describedby="namaRekening"
            />
            <label for="exampleInputEmail1" className="form-label mt-3">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label for="Bank" className="form-label mt-3">
              Bank
            </label>
            <select
              className="form-select w-100"
              aria-label="Default select example"
            >
              <option selected>Pilih Bank</option>
              <option value="1">Mandiri</option>
              <option value="2">BCA</option>
              <option value="3">BNI</option>
            </select>
          </div>
          <label for="tanggalTransfer" className="form-label mt-3">
            Tanggal Transfer
          </label>
          <input
            type="date"
            className="form-control"
            id="tanggalTransfer"
            aria-describedby="tanggal"
          />
          <label for="nilaiTransfer" className="form-label mt-3">
            Nilai Transfer
          </label>
          <input
            type="number"
            className="form-control"
            id="nilaiTransfer"
            aria-describedby="transfer"
          />

          <label className="mt-3">Bukti Transfer</label>
          <div className="input-group mb-3">
            <input type="file" className="form-control" id="inputGroupFile02" />
            <label className="input-group-text" for="inputGroupFile02">
              Upload
            </label>
          </div>

          <button type="submit" className="btn button1 mt-3">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Content1;
