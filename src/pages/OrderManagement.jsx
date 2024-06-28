import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState('');

  const addOrder = () => {
    if (newOrder.trim() !== '') {
      setOrders([...orders, { id: Date.now(), name: newOrder, completed: false }]);
      setNewOrder('');
    }
  };

  const markOrderAsCompleted = (id) => {
    setOrders(orders.map(order => order.id === id ? { ...order, completed: true } : order));
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Restaurant Order Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="newOrder">New Order</Label>
            <Input
              id="newOrder"
              value={newOrder}
              onChange={(e) => setNewOrder(e.target.value)}
              placeholder="Enter order details"
              className="mr-2"
            />
            <Button onClick={addOrder}>Add Order</Button>
          </div>
          <div>
            <h2 className="text-xl mb-2">Current Orders</h2>
            <ul>
              {orders.map(order => (
                <li key={order.id} className="mb-2">
                  <Card className={`p-2 ${order.completed ? 'bg-green-100' : 'bg-white'}`}>
                    <div className="flex justify-between items-center">
                      <span>{order.name}</span>
                      {!order.completed && (
                        <Button variant="outline" onClick={() => markOrderAsCompleted(order.id)}>
                          Mark as Completed
                        </Button>
                      )}
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderManagement;