import React, { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import axios from "axios";

const ListContact = () => {
  const [getDatas, setDatas] = useState([]);

  useEffect(() => {
    console.log("get all data from API contact");
    axios({
      method: "GET",
      url: "http://localhost:3001/api/contacts",
    }).then((results) => {
      console.log(results);
      setDatas(results.data.payload);
    });
  }, []);

  return (
    <div>
      {console.log("get data = ", getDatas)}
      <NavigationBar />
      <div style={{ marginTop: 65 }}>
        <div className="container-fluid">
          <h3 className="text-center">Daftar Kontak Saya</h3>
          <div className="w-full mw-full">
            <div className="card p-0 bg-very-dark-dm">
              <div className="table-responsive">
                <table className="table table-inner-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name Lengkap</th>
                      <th>Nomor Telepon</th>
                      <th>Catatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Lucinta Luna</td>
                      <td>0821299382</td>
                      <td>
                        <div className="row">
                          <div className="col-10">selingkuhan</div>
                          <div className="col-1">
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => console.log("edit!")}
                            >
                              🔍
                            </span>
                          </div>
                          <div className="col-1">
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => console.log("hapus!")}
                            >
                              ❌
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>Ariel Noah</td>
                      <td>08212912312</td>
                      <td>
                        {" "}
                        <div className="row">
                          <div className="col-10">CS ku brader</div>
                          <div className="col-1">
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => console.log("edit!")}
                            >
                              🔍
                            </span>
                          </div>
                          <div className="col-1">
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => console.log("hapus!")}
                            >
                              ❌
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>Luna Maya</td>
                      <td>082129522</td>
                      <td>
                        <div className="row">
                          <div className="col-10">mantan dongs</div>
                          <div className="col-1">
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => console.log("edit!")}
                            >
                              🔍
                            </span>
                          </div>
                          <div className="col-1">
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => console.log("hapus!")}
                            >
                              ❌
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>Deddy Corbuzier</td>
                      <td>08212432</td>
                      <td>
                        <div className="row">
                          <div className="col-10"></div>
                          <div className="col-1">
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => console.log("edit!")}
                            >
                              🔍
                            </span>
                          </div>
                          <div className="col-1">
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => console.log("hapus!")}
                            >
                              ❌
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContact;