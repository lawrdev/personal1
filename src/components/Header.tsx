import { useState, MouseEvent } from "react";
import Logo from "../assets/img/LDlogo.png";
import { NavLink, Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import Menu from "@mui/material/Menu";
import { useTypewriter } from "react-simple-typewriter";

export function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [text] = useTypewriter({
    words: [
      "react developer!",
      "typescript react developer!",
      "javascript developer!",
    ],
    loop: 0, // Infinit
  });

  let activeLinkStyles = { color: "#c00" };

  return (
    <header style={{ marginTop: "3vw" }}>
      <div className="flex justify-between items-center">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="logoWrapper">
            <img src={Logo} alt="logo" />
          </div>

          <div>
            <p className="font-light text-base">
              frontend{" "}
              <span className="text-blue-500 font-semibold">{text}</span>
            </p>
          </div>
        </div>

        <div>
          <nav className="hidden sm:flex gap-9">
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? activeLinkStyles : undefined
              }
            >
              projects
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) =>
                isActive ? activeLinkStyles : undefined
              }
            >
              contact
            </NavLink>
          </nav>

          <div
            className="block sm:hidden"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <button
              aria-controls={open ? "menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="active:scale-95 hover:bg-gray-200 p-1 rounded-lg"
            >
              {!menuOpen ? <MenuRoundedIcon /> : <ClearRoundedIcon />}
            </button>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <div onClick={handleClose}>
                <Link to="/">
                  <p className="px-14 py-2 hover:bg-gray-100">projects</p>
                </Link>
              </div>
              <div onClick={handleClose}>
                <Link to="/about">
                  <p className="px-14 py-2 hover:bg-gray-100">about</p>
                </Link>
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}
