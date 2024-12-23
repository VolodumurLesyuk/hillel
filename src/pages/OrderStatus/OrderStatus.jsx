import './OrderStatus.css'
import {useParams} from "react-router";
import {useEffect, useState} from "react";

const OrderStatus = () => {
    const {id} = useParams();

    const [orderStatus, setOrderStatus] = useState({});

    const getOrder = async () => {
        try {
            const response = await fetch(`https://react-fast-pizza-api.onrender.com/api/order/${id}`);
            const data = await response.json();
            if (data.data) {
                await setOrderStatus(data.data);
            }
        } catch (error) {
            console.error(error.message);
        }

    };

    useEffect(() => {
        getOrder()
    }, [id])


    return (
        <div className="container">
            <div className="header">
                <h1 className="order-title">Order {id} status: {orderStatus.status}</h1>
                <div className="badges">
                    <span className="badge badge-priority">PRIORITY</span>
                    <span className="badge badge-preparing">PREPARING ORDER</span>
                </div>
            </div>

            <div className="time-banner">
                <div className="time-left">
                    Only 49 minutes left 😃
                </div>
                <div className="estimated-time">
                    {orderStatus.estimatedDelivery}
                </div>
            </div>

            <div className="order-details">
                {orderStatus.cart ? (
                    orderStatus.cart.map((item) => (
                        <div className="pizza-item-order" key={item.pizzaId}>
                            <div className="pizza-header">
                                <span className="pizza-name">{item.quantity}× {item.name}</span>
                                <span className="pizza-price">€{item.unitPrice * item.quantity}</span>
                            </div>
                            <div className="ingredients">
                                INGradients
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading order details...</p>
                )}
            </div>

            <div className="price-breakdown">
                <div className="price-item">
                    <span className="price-label">Price pizza:</span>
                    <span className="price-value">€{orderStatus.orderPrice}</span>
                </div>
                {orderStatus.priorityPrice ?
                    (<div className="price-item">
                        <span className="price-label">Price priority:</span>
                        <span className="price-value">€2.00</span>
                    </div>) : null
                }
                <div className="price-item">
                    <span className="price-label">To pay on delivery:</span>
                    <span className="price-value">€{orderStatus.priorityPrice + orderStatus.orderPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default OrderStatus