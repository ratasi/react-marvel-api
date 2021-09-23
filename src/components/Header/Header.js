import { useState } from "react";
import { Menu, Input } from "semantic-ui-react";
import { useHistory } from "react-router";
import "./Header.scss";

export default function Header() {
  const [activeItem, setActiveItem] = useState("inicio");
  let history = useHistory();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    history.push(name);
  };

  return (
    <div className="header-menu">
      <Menu secondary>
        <Menu.Item
          name="inicio"
          active={activeItem === "inicio" || ""}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="series"
          active={activeItem === "series"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="comics"
          active={activeItem === "comics"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Buscar película o serie..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
