import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export const ProductCard = ({ id, name, text, price, img }) => {
  return (
    <Card className="w-full sm:w-96 my-4 mx-5 p-4">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={img} alt="ui/ux review check" className="w-full h-auto" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {name}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {text}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {price}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between"></CardFooter>
    </Card>
  );
};
