import React from "react";


import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const Contact: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-lg p-8">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="font-bold">Name:</Label>
              <p>Muhammad Murtaza Husain</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email" className="font-bold">Email:</Label>
              <p>mxh786@outlook.com</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone" className="font-bold">Phone Number:</Label>
              <p>346-715-2122</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
