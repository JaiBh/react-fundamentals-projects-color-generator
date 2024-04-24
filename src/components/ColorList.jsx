import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return (
          <SingleColor color={color} index={index} key={nanoid()}></SingleColor>
        );
      })}
    </section>
  );
};
export default ColorList;
