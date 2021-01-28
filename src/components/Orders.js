import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../actions/orderAction";
import formatCurrency from "../util";

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    const { orders } = this.props;
    return !orders ? (
      <div>Danh sách đơn hàng</div>
    ) : (
      <div className="orders">
        <h2>Danh sách đơn hàng</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ngày</th>
              <th>TỔNG TIỀN</th>
              <th>HỌ VÀ TÊN</th>
              <th>EMAIL</th>
              <th>ĐỊA CHỈ</th>
              <th>DS sản phẩm</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order._id}</td>
                <td>{order.createdAt}</td>
                <td> {formatCurrency(order.total)}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>
                  {order.cartItems.map((item) => (
                    <div>
                      {item .count} {" x "} {item.title}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    orders: state.order.orders,
  }),
  {
    fetchOrders,
  }
)(Orders);