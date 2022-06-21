import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="header-color text-white px-4 py-5 text-center">
        <div><img className='mb-4' src="./src/utils/Copia de Logo F! Copy copiar.png" alt="logo" width="150" height="150"/></div>
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">Unete al mundo del automovilismo</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">Viste como tus pilotos Favoritos Siente los colores de tu escuderia Favorita, emocionate como nosotros en cada carrera, cada domingo viste tus colores favoritos</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to='/signup'>
                <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Sign Up</button>
              </Link>
              <Link to='/login'>
              <button type="button" className="btn btn-outline-info btn-lg px-4">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                {/* Product image*/}
                <img className="card-img-top" src="https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2022-team-half-zip-jumper_ss4_p-13300674+u-1gxct986vg7f16c9lzd8+v-bc2985ab68b14b659dcdc197317d828f.jpg?_hv=1&w=340" alt="..." />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Jersey de media cremallera del equipo Scuderia Ferrari 2022</h5>
                    {/* Product price*/}
                    $40.00 - $80.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-danger mt-auto" href="#">Add to Cart</a></div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* Sale badge*/}
                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                {/* Product image*/}
                <img className="card-img-top" src="https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-2022-lewis-hamilton-baseball-cap-purple_ss4_p-13300604+u-9lqsx3dkmdvn8atggf6e+v-c111bcc3e8b641669a02564e8106f86c.jpg?_hv=1&w=340" alt="..." />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Gorra de béisbol Mercedes AMG Petronas F1 2022 Lewis Hamilton - Violeta</h5>
                    {/* Product reviews*/}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                    </div>
                    {/* Product price*/}
                    <span className="text-muted text-decoration-line-through">$20.00</span>
                    $18.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-danger mt-auto" href="/shopitem">Add to cart</a></div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* Sale badge*/}
                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                {/* Product image*/}
                <img className="card-img-top" src="https://images.footballfanatics.com/red-bull/oracle-red-bull-racing-2022-team-t-shirt_ss4_p-13300649+u-w4u34ud78xqny7usgbtn+v-23202ea1cf1f4881919aa5673234fc11.jpg?_hv=1&w=340" alt="..." />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Camiseta del equipo Red Bull Racing 2022</h5>
                    {/* Product price*/}
                    <span className="text-muted text-decoration-line-through">$50.00</span>
                    $25.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-danger mt-auto" href="#">Add to cart</a></div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* Product image*/}
                <img className="card-img-top" src="https://images.footballfanatics.com/red-bull/oracle-red-bull-racing-2022-team-max-verstappen-baseball-cap_ss4_p-13300673+u-9x7yyok034qi6pzk26dl+v-988654b4c17440158134bbfedb1bda49.jpg?_hv=1&w=340" alt="..." />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Red Bull Racing 2022 Team Max Verstappen Gorra de béisbol</h5>
                    {/* Product reviews*/}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                    </div>
                    {/* Product price*/}
                    $40.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-danger mt-auto" href="#">Add to cart</a></div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* Sale badge*/}
                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                {/* Product image*/}
                <img className="card-img-top" src="https://images.footballfanatics.com/red-bull/oracle-red-bull-racing-2022-team-softshell-womens_ss4_p-13300697+u-4x0ogsfqrnx71vs0to2g+v-0c607061c009449091b8ad5508be32f4.jpg?_hv=1&w=340" alt="..." />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Red Bull Racing 2022 Team Softshell - Mujer</h5>
                    {/* Product price*/}
                    <span className="text-muted text-decoration-line-through">$150.00</span>
                    $125.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-danger mt-auto" href="#">Add to cart</a></div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* Product image*/}
                <img className="card-img-top" src="https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-2022-team-t-shirt-black_ss4_p-13300567+u-eutxfv4porjwk2sziso7+v-f9305d5a775b41f585f419fd10c5c54f.jpg?_hv=1&w=340" alt="..." />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">T-Shirt del equipo Mercedes AMG Petronas F1 2022 - Negro</h5>
                    {/* Product price*/}
                    $120.00 - $280.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-danger mt-auto" href="/shopitem">Add to Cart</a></div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* Sale badge*/}
                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                {/* Product image*/}
                <img className="card-img-top" src="https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-2021-lewis-hamilton-brazilian-gp-winner-1:5-model-helmet_ss4_p-13306606+u-13emg3n2nwye6kwt4gf1+v-18a457c57c0d4a01a8efbdc0a186ad72.jpg?_hv=1&w=340" alt="..." />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Mercedes AMG Petronas F1 2021 Lewis Hamilton Ganador del GP de Brasil Modelo 1: 5 Casco</h5>
                    {/* Product reviews*/}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                    </div>
                    {/* Product price*/}
                    <span className="text-muted text-decoration-line-through">$20.00</span>
                    $18.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-danger mt-auto" href="#">Add to cart</a></div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* Product image*/}
                <img className="card-img-top" src="https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2022-team-polo_ss4_p-13300635+u-1aht9v9750yzhrzw8kg3+v-ef82d572e9f04a49995131523e4de5a9.jpg?_hv=1&w=340" alt="..." />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Polo del equipo Scuderia Ferrari 2022</h5>
                    {/* Product reviews*/}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                    </div>
                    {/* Product price*/}
                    $40.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-danger mt-auto" href="#">Add to cart</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
