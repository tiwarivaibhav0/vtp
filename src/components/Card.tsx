import { Carousel, Tabs } from "antd";
import React from "react";
import type { TabsProps } from "antd";
import { contentStyle } from "../utils";
import ReactPro from "./ReactPro";

type Props = {};

const Card = (props: Props) => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <h3 className="grid_items-title">Tab1</h3>,
      children: <ReactPro data={Array(8).fill(1)} />,
    },
    {
      key: "2",
      label: <h3 className="grid_items-title">Tab2</h3>,
      children: <ReactPro data={Array(8).fill(1)} />,
    },
    {
      key: "3",
      label: <h3 className="grid_items-title">Tab3</h3>,
      children: <ReactPro data={Array(8).fill(1)} />,
    },
  ];

  const onChangeCarousel = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <Carousel afterChange={onChangeCarousel}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
      </Carousel>
      <div className="featured">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          type="card"
          centered
          
          
        />
      </div>
    </div>
  );
};

export default Card;
