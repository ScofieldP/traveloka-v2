import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Header from "../../Header";
import Footer from "../../Footer";
import { CONNECTION_STRING } from "../../../config/index";

export default function OrderTable(props) {
  const [tbl, setTbl] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [userPhone, setUserPhone] = useState(null);
  const [userName, setUserName] = useState(null);
  const [number, setNumber] = useState(null);
  const [deposit, setDeposit] = useState(null);
  const [table, setTable] = useState(null);
  const [tblID, setTblID] = useState(null);
  const [note, setNote] = useState(null);

  const navigate = useNavigate();

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  const data = !localStorage.itemRes ? "" : JSON.parse(localStorage.itemRes);
  const user = !localStorage.user ? "" : JSON.parse(localStorage.user);
  useEffect(() => {
    const getTbl = async () => {
      const tblRes = await Axios.get(
        CONNECTION_STRING + `/table/${data.Res_id}`
      );
      setTbl(tblRes.data);
      setUserName(user.name);
      setUserPhone(user.phone);
    };
    getTbl();
  }, []);

  function ReanderTable() {
    let tableList = [...tbl];
    return tableList.map((tbl, i) => {
      return <option value={tbl.Tbl_id}>{tbl.Tbl_name}</option>;
    });
  }
  function SetValueTable() {
    const tb = tbl.find((a) => a.Tbl_id === tblID);
    setTable(tb.Tbl_name);
    setDeposit(tb ? tb.Tbl_deposit : null);
    setNumber(tb ? tb.Tbl_number : null);
  }

  function OrderTable() {
    const formatTime = moment(startDate).format("DD/MM/YYYY, hh:mm a");
    const tableDetail = {
      table,
      number,
      formatTime,
      userName,
      deposit,
      userPhone,
      note,
      tableID: tblID,
      resID: data.Res_id,
    };
    localStorage.setItem("orderTable", JSON.stringify(tableDetail));
    navigate("/orderFood");
  }

  return (
    <>
      <Header />
      <section className="main_table py-5 ">
        <div className="container w-75 border border-dark  bg-dark">
          <div className="container border border-dark border-end-0 border-bottom-0 border-top-0 bg-dark">
            <div className="order_title border-0 border-bottom border-dark ">
              <h4 className="text-center py-2 font_title">Phi???u ?????t b??n</h4>
            </div>
            <div className="form_tbl d-flex py-3">
              <div className="col-6">
                {/* Th???i gian nh???n b??n */}
                <div className="date_picker">
                  <label for="datepicker" class="form-label text-white">
                    Ng??y ?????t b??n
                  </label>
                    <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
                </div>
                {/* S??? ??i???n tho???i */}
                <div className="phone_number mt-3">
                  <label for="datepicker" class="form-label text-white ">
                    S??? ??i???n tho???i
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="S??? ??i???n tho???i"
                    value={userPhone}
                    onChange={(e) => userPhone(e.target.value)}
                  />
                </div>

                {/* Ch???n b??n */}
                <div className="pick_table mt-3">
                  <label for="datepicker" class="form-label text-white">
                    Ch???n b??n
                  </label>
                  <select
                    type="text"
                    class="form-control"
                    onChange={(e) => setTblID(e.target.value)}
                    onClick={SetValueTable}
                  >
                    <option value="">Ch???n</option>
                    {ReanderTable()}
                  </select>
                </div>

                {/* ?????t c???c tr?????c */}
                <div className="pick_table mt-3">
                  <label for="datepicker" class="form-label text-white">
                    ?????t c???c tr?????c
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="?????t c???c tr?????c"
                    value={deposit}
                    onChange={(e) => setDeposit(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-6 ms-3">
                {/* S??? kh??ch */}
                <div className="pick_table">
                  <label for="datepicker" class="form-label text-white">
                    S??? l?????ng ng?????i
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="S??? l?????ng ng?????i "
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>

                {/* Kh??ch h??ng */}
                <div className="pick_table mt-3">
                  <label for="datepicker" class="form-label text-white">
                    H??? t??n kh??ch h??ng
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nh???p t??n kh??ch h??ng"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                {/* Ghi ch?? */}
                <div className="pick_table mt-3">
                  <label for="datepicker" class="form-label text-white">
                    Ghi ch??
                  </label>
                  <input
                    type="text"
                    class="form-control1 "
                    placeholder="Ghi ch??"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-primary w-100 py-3 mt-3 "
              onClick={OrderTable}
            >
              ?????T B??N
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
