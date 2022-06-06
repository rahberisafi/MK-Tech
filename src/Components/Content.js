import React from 'react'

function Content() {
  return (
    <div>
      <section className=''>
        <div
          id='carouselExampleSlidesOnly'
          className='carousel slide'
          data-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                className='d-block w-100'
                src='Images/01.jpg'
                alt='First slide'
                style={{ height: 'auto' }}
              />
            </div>
            <div className='carousel-item'>
              <img
                className='d-block w-100 '
                src='Images/02.jpg'
                alt='Second slide'
                style={{ height: 'auto' }}
              />
            </div>
            <div className='carousel-item'>
              <img
                className='d-block w-100'
                src='Images/03.jpg'
                alt='Third slide'
                style={{ height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-light' id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-12'>
              <h3 className='text-center mt-4 text-secondary'>Know about us</h3>
            </div>
          </div>
          <div className='row'>
            <p className='mt-4 mb-5'>
              FICB Securities Limited is devoted to the development of the
              Capital Market of the country through extending world-className
              brokerage services to the individual and institutional investors.
              FICB deals in buying, selling and trading of securities in the
              Capital Market. As a sophisticated and innovative financial
              solutions provider, FICB aims at providing all sorts of brokerage
              and custodial services to its customers with the help of a
              dedicated work-force. FICB is a TREC holder of Dhaka Stock
              Exchange Limited.
            </p>
          </div>
        </div>
      </section>

      <section className='' id='product'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-12'>
              <h3 className='text-center mt-4 text-secondary'>Our Product</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-4 mb-5'>
              <div className='card mt-4'>
                <img className='card-img-top' src='Images/ig-3.jpg' alt='' />
                <div className='card-body'>
                  <h4 className='card-title text-secondary'>
                    Brokerage Services
                  </h4>
                  <p className='card-text text-secondary'>
                    Trade execution in Dhaka Stock Exchange Limited Dedicated,
                    skilled & experienced dealer for Trade VIP Trading Booth &
                    Female Trading Booth.
                  </p>
                </div>
                <div className='card-footer'>
                  <a href='c' className='btn btn-primary'>
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div className='col-sm-4 mb-5'>
              <div className='card mt-4'>
                <img className='card-img-top' src='Images/t-2.jpg' alt='' />
                <div className='card-body'>
                  <h4 className='card-title text-secondary'>
                    Margin Loan Facilities
                  </h4>
                  <p className='card-text text-secondary'>
                    Extends financial support to the clients for investment in
                    the secondary market against the margin deposit of the
                    clients within the limit set by the Management.
                  </p>
                </div>
                <div className='card-footer'>
                  <a href='c' className='btn btn-primary'>
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div className='col-sm-4 mb-5'>
              <div className='card mt-4'>
                <img className='card-img-top' src='Images/t-1.jpg' alt='' />
                <div className='card-body'>
                  <h4 className='card-title text-secondary'>Full Service DP</h4>
                  <p className='card-text text-secondary'>
                    BO (Beneficial Owners) Accounts Opening Dematerialization of
                    Shares Re-materialization of Shares Transfers and Multiple
                    Accounts Movement Pledging.
                  </p>
                </div>
                <div className='card-footer'>
                  <a href='c' className='btn btn-primary'>
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='' id='client'>
        <div className='container'>
          <div className='col-sm-12 col-md-12 mb-4'>
            <h3 className='text-center text-secondary mt-4'>Become A Client</h3>
          </div>
          <div className='accordion' id='accordionExample'>
            <div className='card'>
              <div className='card-header' id='headingOne'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link'
                    type='button'
                    data-toggle='collapse'
                    data-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    Different Types Of Client
                  </button>
                </h2>
              </div>

              <div
                id='collapseOne'
                className='collapse show'
                aria-labelledby='headingOne'
                data-parent='#accordionExample'
              >
                <div className='card-body'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header' id='headingTwo'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    Business Client
                  </button>
                </h2>
              </div>
              <div
                id='collapseTwo'
                className='collapse'
                aria-labelledby='headingTwo'
                data-parent='#accordionExample'
              >
                <div className='card-body'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header' id='headingThree'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    Trader Client
                  </button>
                </h2>
              </div>
              <div
                id='collapseThree'
                className='collapse'
                aria-labelledby='headingThree'
                data-parent='#accordionExample'
              >
                <div className='card-body'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-light mt-5' id='service'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-sm-12 col-md-12 mb-4'>
              <h3 className='text-center mt-4 text-secondary'>
                Meet Our People
              </h3>
            </div>
            <div className='col-md-4'>
              <div className='testimonial mb-5'>
                <div className='avatar mx-auto'>
                  <img
                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg'
                    className='rounded-circle z-depth-1 img-fluid'
                    alt='profile'
                  />
                </div>
                <h4 className='font-weight-bold dark-grey-text mt-4'>
                  Anna Deynah
                </h4>
                <h6 className='font-weight-bold blue-text my-3'>
                  Managing Director
                </h6>
                <p className='font-weight-normal dark-grey-text'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur.
                </p>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='testimonial mb-5'>
                <div className='avatar mx-auto'>
                  <img
                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg'
                    className='rounded-circle z-depth-1 img-fluid'
                    alt='profile'
                  />
                </div>
                <h4 className='font-weight-bold dark-grey-text mt-4'>
                  John Doe
                </h4>
                <h6 className='font-weight-bold blue-text my-3'>CEO</h6>
                <p className='font-weight-normal dark-grey-text'>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi.
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='testimonial mb-5'>
                <div className='avatar mx-auto'>
                  <img
                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg'
                    className='rounded-circle z-depth-1 img-fluid'
                    alt='profile'
                  />
                </div>
                <h4 className='font-weight-bold dark-grey-text mt-4'>
                  Maria Kate
                </h4>
                <h6 className='font-weight-bold blue-text my-3'>CFO</h6>
                <p className='font-weight-normal dark-grey-text'>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Content
