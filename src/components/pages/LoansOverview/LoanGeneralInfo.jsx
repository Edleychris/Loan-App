import React from 'react';
import css from './loangeneralinfo.module.css';

export const LoanGeneralInfo = () => {
  return (
    <div>
    <div className={css.overBody}>
        <form className={css.overform_div}>
          <div className={css.overFormDiv}>
            <h1 className={css.overform_h1}>Personal Information</h1>
            <div className={css.overForm}>
              <div className={css.overform_div1}>
                <div className={css.overformRows}>
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Chioma"
                    required
                  />
                </div>
                <div className={css.overformRows}>
                  <label htmlFor="middlename">Middle Name</label>
                  <input
                    type="text"
                    id="middlename"
                    placeholder="Kahlay"
                  />
                </div>
                <div className={css.overformRows}>
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Christopher"
                  />
                </div>
              </div>

              <div className={css.overform_div1}>
                <div className={css.overformRows}>
                  <label htmlFor="sex">Sex</label>
                  <input
                    type="text"
                    id="sex"
                    placeholder="female"
                  />
                </div>
                <div className={css.overformRows}>
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="text"
                    id="dob"
                    placeholder="28/05/2000"
                  />
                </div>
                <div className={css.overformRows}>
                  <label htmlFor="maritalstatus">Marital Status</label>
                  <input
                    type="text"
                    id="marital"
                    placeholder="single"
                  />
                </div>
              </div>

              <div className={css.overform_div1}>
                <div className={css.overformRows}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="chiomachris@gmail.com"
                  />
                </div>
                <div className={css.overformRows}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="number"
                    id="phone"
                    placeholder="08022222222"
                  />
                </div>
                <div className={css.overformRows}>
                  <label htmlFor="nin">NIN</label>
                  <input
                    type="number"
                    id="nin"
                    placeholder="111122220000"
                  />
                </div>
              </div>

              <div className={css.overform_div1}>
                <div className={css.overformLong}>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Olowoporoku Close, Gbagada Estate, Lagos"
                  />
                </div>
                <div className={css.overformRows}>
                  <label htmlFor="tenancy">Tenancy Start Date</label>
                  <input
                    type="number"
                    id="tenancy"
                    placeholder="12/01/2015"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={css.overform_div2}>
            <h1 className={css.overform_h1}>Employment Information</h1>
            <div className={css.overForm}>
              <div className={css.overform_div1}>
                <div className={css.overformRows}>
                  <label htmlFor="placework">Place of Work</label>
                  <input
                    type="text"
                    id="placework"
                    placeholder="Nigerian Aviation"
                    required
                  />
                </div>
                <div className={css.overformRows}>
                  <label htmlFor="jobtitle">Job Title</label>
                  <input
                    type="text"
                    id="jobtitle"
                    placeholder="Air Hostess"
                  />
                </div>
                <div className={css.overformRows}>
                  <label htmlFor="workmail">Work Email</label>
                  <input
                    type="email"
                    id="workmail"
                    placeholder="chiomachris@ngair.com"
                  />
                </div>
              </div>

              <div className={css.overform_div1}>
                <div className={css.overformRows}>
                  <label htmlFor="staffnum">Company Staff Number</label>
                  <input
                    type="text"
                    id="staffnum"
                    placeholder="NGA7890"
                  />
                </div>
                <div className={css.overformRows}>
                  <label htmlFor="startdate">Start Date</label>
                  <input
                    type="number"
                    id="startdate"
                    placeholder="04/05/2013"
                  />
                </div>
                <div className={css.overformRows}>
                  <label htmlFor="enddate">End Date</label>
                  <input
                    type="text"
                    id="enddate"
                    placeholder="N/A"
                  />
                </div>
              </div>

              <div className={css.overform_div1}>
                <div className={css.overformLong}>
                  <label htmlFor="comp-address">
                    Company Physical Address
                  </label>
                  <input
                    type="text"
                    id="companyadd"
                    placeholder="SANCO Complex, MMA2 Ikeja, Lagos"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={css.overform_div3}>
            <h1 className={css.overform_h1}>Guarantor Information</h1>
            <div className={css.overForm}>
              <div className={css.overform_div1}>
                <div className={css.overformRows}>
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Ajayi Bobo"
                    required
                  />
                </div>
                <div className={css.overformRows}>
                  <label htmlFor="empstatus">Employment Status</label>
                  <input
                    type="text"
                    id="empstatus"
                    placeholder="Employed"
                  />
                </div>
                <div className={css.overformRows}>
                  <label htmlFor="guarantmail">Email Address</label>
                  <input
                    type="email"
                    id="guarantmail"
                    placeholder="omolois@gmail.com"
                  />
                </div>
              </div>

              <div className={css.overform_div1}>
                <div className={css.overformRows}>
                  <label htmlFor="guarantnum">Phone Number</label>
                  <input
                    type="number"
                    id="guarantnum"
                    placeholder="09022224545"
                  />
                </div>
                <div className={css.overformRows}>
                  <label htmlFor="guarantdob">Date of Birth</label>
                  <input
                    type="number"
                    id="guarantdob"
                    placeholder="04/05/1996"
                  />
                </div>
                <div className={css.overformRows}>
                  <label htmlFor="guarantnin">NIN</label>
                  <input
                    type="number"
                    id="guarantnin"
                    placeholder="245698655678"
                  />
                </div>
              </div>

              <div className={css.overform_div1}>
                <div className={css.overformRows}>
                  <label htmlFor="guarantwork">Place of Work</label>
                  <input
                    type="text"
                    id="guarantwork"
                    placeholder="Green Logistics"
                  />
                </div>
                <div className={css.overformLong}>
                  <label htmlFor="guaworkadd">Work Address</label>
                  <input
                    type="text"
                    id="guaworkadd"
                    placeholder="12, Herbert Marculay way, Ikoyi, Lagos"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
