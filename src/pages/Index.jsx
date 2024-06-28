import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Your New App</h1>
      <p className="text-lg">This is a bare-bones application. Start building your amazing app here!</p>
      <Link to="/order-management">
        <Button variant="outline">Go to Order Management</Button>
      </Link>
    </div>
  );
};

export default Index;