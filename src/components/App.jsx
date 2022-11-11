import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeBackground,
  decrementHeight,
  decrementWidth,
  incrementHeight,
  incrementWidth,
  addBorder,
} from "../redux/sliceNewComponent/sliceNewComponent";

export default function App() {
  // const borderWidthRef = useRef(null);
  // const borderStyleRef = useRef(null);
  // const borderColorRef = useRef(null);

  const [borderWidth, setBorderWidth] = useState("");
  const [borderStyle, setBorderStyle] = useState("");
  const [borderColor, setBorderColor] = useState("");

  const selects = {
    borderWidth: setBorderWidth,
    borderStyle: setBorderStyle,
    borderColor: setBorderColor,
  };

  useEffect(() => {
    dispatch(addBorder(`${borderWidth} ${borderStyle} ${borderColor}`));
  }, [borderWidth, borderStyle, borderColor]);

  const changeBorder = (event) => {
    selects[event.target.name](event.target.value);
  };

  const width = useSelector((state) => state.newComponent.width);
  const height = useSelector((state) => state.newComponent.height);
  const bcgcolor = useSelector((state) => state.newComponent.backgroundcolor);

  const border = useSelector((state) => state.newComponent.border);
  console.log(border);

  const dispatch = useDispatch();

  const plusWidth = () => {
    dispatch(incrementWidth());
  };
  const minusWidth = () => {
    dispatch(decrementWidth());
  };
  const plusHeight = () => {
    dispatch(incrementHeight());
  };
  const minusHeight = () => {
    dispatch(decrementHeight());
  };

  const getColor = (event) => {
    dispatch(changeBackground(event.target.value));
  };

  const getBorderProperties = (event) => {
    dispatch(
      addBorder()
      // `${borderWidthRef.current.value} ${borderStyleRef.current.value} ${borderColorRef.current.value} `
    );
  };

  return (
    <>
      <div>
        App
        <button onClick={plusWidth} type="button">
          + Width
        </button>
        <button onClick={minusWidth} type="button">
          - Width
        </button>
        <button onClick={plusHeight} type="button">
          + Height
        </button>
        <button onClick={minusHeight} type="button">
          - Height
        </button>
        <select onChange={getColor} name="select" id="select">
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </select>
        <label>
          Choose border Line
          <select
            // ref={borderWidthRef}
            onChange={changeBorder}
            name="borderWidth"
            id="border-width"
          >
            <option value="1px">1px</option>
            <option value="2px">2px</option>
            <option value="3px">3px</option>
            <option value="4px">4px</option>
            <option value="5px">5px</option>
          </select>
        </label>
        <label>
          Choose border Width
          <select
            // ref={borderStyleRef}
            onChange={changeBorder}
            name="borderStyle"
            id="border-type"
          >
            <option value="solid">Solid</option>
            <option value="dotted">Dotted</option>
            <option value="dashed">Dashed</option>
            <option value="double">Double</option>
          </select>
        </label>
        <label>
          Choose border Color
          <select
            // ref={borderColorRef}
            onChange={changeBorder}
            name="borderColor"
            id="border-color"
          >
            <option value="green">Green</option>
            <option value="orange">Orange</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
          </select>
        </label>
      </div>

      <div
        style={{
          border: border,
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: bcgcolor,
        }}
        className="component"
      ></div>
    </>
  );
}
