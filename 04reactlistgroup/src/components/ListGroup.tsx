import { useState } from "react";

// { cities : [], heading : string }
interface ListGroupProps {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ heading, items, onSelectItem }: ListGroupProps) {
  // let cities = ["Karachi", "Hyderabad", "Sukkur", "Nawabshah", "Pindi"];
  // cities = [];
  // let selectedIndex = 1;

  // We use multiple hooks - useState is one of them
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0]; Variable (Selected Index)
  // arr[1]; updater function

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Cities Found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
