import image2 from '../assets/Payment_image/123.png'
import {paymentData} from './paymentData'
import { useState } from 'react'

export default function Table(){
// PAYMENT DATA
    const [paymentList, setPaymentList] = useState(
        paymentData.map((obj, index) => {
            return {
                ...obj,
                showImage: false,
                showTooltip: false,
                id: index
            }
        })
    )

    function handleShowImage(event, id){
        event.preventDefault()
        setPaymentList(prev => {
            return prev.map(obj => {
                return (obj.id === id) ? {...obj, showImage: !obj.showImage} : obj
            })
        })
    }

    function handleTooltip(id){
        setPaymentList(prev => prev.map(obj => {
            return obj.id === id ? {...obj, showTooltip: !obj.showTooltip} : obj
        }))
    }
//PaginatedList:
const [currentIndex, setCurrentIndex] = useState(0)
const itemsPerPage = 11

function handleNextButton(){
    if(currentIndex + itemsPerPage < paymentList.length){
        setCurrentIndex(prev => prev + itemsPerPage)
    }
}
function handlePrevButton(){
    if(currentIndex > 0){
        setCurrentIndex(prev => prev - itemsPerPage)
    }
}
//PaginatedList:

    //Display Payment:
    const displayPayment = paymentList.slice(currentIndex, currentIndex + itemsPerPage).map((obj) => {
        return (
            <tr key={obj.id}>
                  <td>{obj.date}</td>
                  <td>{obj.time}</td>
                  <td>{obj.total}</td>
                    <td>
                        <a href="#" onClick={(e) => handleShowImage(e, obj.id)}>{obj.proof}</a>
                        {obj.showImage && <img id="image-popup" src={image2} onClick={(e) => handleShowImage(e, obj.id)}></img>}
                    </td>
                    <td>
                        <span
                            className="tooltip-container"
                            onMouseEnter={() => handleTooltip(obj.id)}
                            onMouseLeave={() => handleTooltip(obj.id)}
                        >
                        {obj.desc}
                        {obj.showTooltip && <span className="tooltip-box">Mô tả: <br/> {obj.desc}</span>}
                        </span>
                    </td>
            </tr>
            
        )
    })
    //Display Payment
// PAYMENT DATA


return(
<main className="payment-page">
        <table className="payment-table">
    {/* TABLE HEAD */}
          <thead className="table-head">
              <tr>
                <th><span>Ngày</span></th>
                <th><span>Thời gian</span></th>
                <th><span>Tổng tiền</span></th>
                <th><span>Minh chứng</span></th>
                <th><span>Mô tả</span></th>
              </tr>
          </thead>
    {/* TABLE HEAD */}

    {/* TABLE BODY */}          
          <tbody className="table-body">
                {displayPayment}
          </tbody>
    {/* TABLE BODY */}
    </table>

    
    {/* Prev-NEXT BUTTON */}
    <div className="button-container">
        <button className="prev-button" onClick={handlePrevButton} disabled={currentIndex === 0}>PREV</button>
        <button className="next-button" onClick={handleNextButton}  disabled={currentIndex + itemsPerPage >= paymentList.length}>NEXT</button>
    </div>
    {/* Prev-NEXT BUTTON */}

    
</main>
    )
}
