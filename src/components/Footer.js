import React from 'react';

const Footer = () => {
    return (
      <section className="footer mt-5">

     
      <footer className="text-center text-lg-start text-white"
              style={{backgroundColor:'#1c2331' }}>
          
          <section className="d-flex justify-content-between p-4 " style={{backgroundColor: '#51BBED'}} >
            
              <div className="me-5">
                  <span>Kết nối cùng chúng tôi trên các nền tảng mạng xã hội: </span>
              </div>
              
              <div>
                  <a href="#" className="text-white me-4">
                      <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="" className="text-white me-4">
                      <i className="fab fa-twitter"></i>
                  </a>
                  <a href="" className="text-white me-4">
                      <i className="fab fa-google"></i>
                  </a>
                  <a href="" className="text-white me-4">
                      <i className="fab fa-instagram"></i>
                  </a>
                  <a href="" className="text-white me-4">
                      <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="" className="text-white me-4">
                      <i className="fab fa-github"></i>
                  </a>
              </div>
            
          </section>
      
          <section className="">
              <div className="container text-center text-md-start mt-5">
              
                  <div className="row mt-3">
                    
                      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                   
                          <h6 className="text-uppercase fw-bold">VY2 - 08</h6>
                          <hr className="mb-4 mt-0 d-inline-block mx-auto"
                              style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                          <ul>
                              <li>Lương Trần Thiên Phúc</li>
                              <li>Lê Hải Triều</li>
                              <li>Đào Toàn Thắng</li>
                          </ul>
                      </div>
                      
                      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        
                          <h6 className="text-uppercase fw-bold">Dịch vụ</h6>
                          <hr className="mb-4 mt-0 d-inline-block mx-auto"
                              style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                          <p>
                              <a href="#!" className="text-white text-decoration-none">Nhà hàng</a>
                          </p>
                          <p>
                              <a href="#!" className="text-white text-decoration-none">Đặt vé máy bay</a>
                          </p>
                          <p>
                              <a href="#!" className="text-white text-decoration-none">Đặt khách sạn</a>
                          </p>
                          <p>
                              <a href="#!" className="text-white text-decoration-none">Gift Voucher</a>
                          </p>
                      </div>
                     
                      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                         
                          <h6 className="text-uppercase fw-bold">Hỗ trợ</h6>
                          <hr className="mb-4 mt-0 d-inline-block mx-auto"
                              style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                          <p>
                              <a href="#!" className="text-white text-decoration-none">Chính sách quyền riêng tư</a>
                          </p>
                          <p>
                              <a href="#!" className="text-white text-decoration-none">Traveloka Blog</a>
                          </p>
                          <p>
                              <a href="#!" className="text-white text-decoration-none">Điều khoản & điều kiện</a>
                          </p>
                          <p>
                              <a href="#!" className="text-white text-decoration-none">Gứi góp ý - khiếu nại</a>
                          </p>
                      </div>
                     
                      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                         
                          <h6 className="text-uppercase fw-bold">Liên hệ</h6>
                          <hr className="mb-4 mt-0 d-inline-block mx-auto"
                              style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                          <p><i className="fas fa-home mr-3"></i> HUFLIT University</p>
                          <p><i className="fas fa-envelope mr-3"></i> vy08@gmail.com</p>
                          <p><i className="fas fa-phone mr-3"></i> + 078 346 7852</p>
                          <p><i className="fas fa-print mr-3"></i> + 058 257 5704</p>
                      </div>
                     
                  </div>
             
              </div>
          </section>

          <div className="text-center p-3"
               >
              <p>&copy; Lương Trần Thiên Phúc - Lê Hải Triều - Đào Toàn Thắng</p>
          </div>

      </footer>



  </section>
    );
}

export default Footer;
