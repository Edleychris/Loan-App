import { MdKeyboardArrowUp } from 'react-icons/md'
import './percentage.css'

export const Percentage = () => {
  return (
       <div className='prediction-block'>
            <div className='prediction'>
               <div className='data-blue'>
                    <p>New Clients</p>
                    <div className='percentage-block'>
                        <MdKeyboardArrowUp className='blue'/>
                        <p>110
                           <span className='percent'>%</span>
                        </p>
                    </div>
               </div>
               <div className='circle circle-blue'>
                   <p>45</p>
               </div>
            </div>

            <div className='prediction green-color'>
               <div className='data-green'>
                    <p>Active Loans</p>
                    <div className='percentage-block'>
                        <MdKeyboardArrowUp className='green'/>
                        <p>60
                           <span className='percent'>%</span>
                        </p>
                    </div>
               </div>
               <div className='circle circle-green'>
                   <p>50</p>
               </div>
            </div>

            <div className='prediction yellow-color'>
               <div className='data-yellow'>
                    <p>Extended Loans</p>
                    <div className='percentage-block'>
                        <MdKeyboardArrowUp className='yellow'/>
                        <p>30
                           <span className='percent'>%</span>
                        </p>
                    </div>
               </div>
               <div className='circle circle-yellow'>
                   <p>20</p>
               </div>
            </div>

            <div className='prediction red-color'>
               <div className='data-red'>
                    <p>Overdue Payments</p>
                    <div className='percentage-block'>
                        <MdKeyboardArrowUp className='red'/>
                        <p>30
                           <span className='percent'>%</span>
                        </p>
                    </div>
               </div>
               <div className='circle circle-red'>
                   <p>18</p>
               </div>
            </div>

            <div className='prediction red-color'>
               <div className='data-red'>
                    <p>Defaulted Loans</p>
                    <div className='percentage-block'>
                        <MdKeyboardArrowUp className='red'/>
                        <p>30
                           <span className='percent'>%</span>
                        </p>
                    </div>
               </div>
               <div className='circle circle-red'>
                   <p>18</p>
               </div>
            </div>
       </div>
  
  )
}
