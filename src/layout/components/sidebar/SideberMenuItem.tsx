/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useLocation } from "react-router";

interface SideberMenuItem {
  isOpen: boolean;
}

type Btnclick = {
  menu_url: string;
};

export default function SideberMenuItem({ isOpen }: SideberMenuItem) {
  const [openSubmenu, setOpenSubmenu] = React.useState(false);
  const menu = useSelector((state: any) => state?.user_menu?.user_menu);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuItems, setMenuItems] = React.useState([]);
  const [checkMenu, setCheckMenu] = React.useState<any>(null);

  const handleClick = (el: Btnclick) => {
    navigate(`/${el.menu_url}`);
  };

  const handleClickMenu = (data: any) => {
    setCheckMenu(data == checkMenu ? null : data);
    setOpenSubmenu(data == checkMenu ? false : true);
  };

  const setSubMenu = () => {
    const data = menu;
    const newData: any = [];
    const newDataSub: any = [];
    Array.isArray(data) &&
      data.forEach((el) => {
        if (el.menu_sub == 0) {
          newData.push(el);
        }
        if (el.menu_sub != 0) {
          newDataSub.push(el);
        }
      });
    const newMenu: any = [];
    Array.isArray(newData) &&
      newData.forEach((menu) => {
        const newSubMenu: any = [];
        Array.isArray(newDataSub) &&
          newDataSub.forEach((submenu) => {
            if (menu.menu_id == submenu.menu_sub) {
              newSubMenu.push(submenu);
            }
          });
        newMenu.push({ ...menu, ...{ submenu: newSubMenu } });
        
      });
      console.log(newMenu,'newMenunewMenunewMenu');
    setMenuItems(newMenu);
  };

  React.useEffect(() => {
    setSubMenu();
  }, [menu]);

  return (
    <div className="">
      <ul className="ml-[-10px]">
        {menuItems.map((el: any, index) => (
          <div key={index}>
            {el?.submenu.length == 0 ? (
              <li
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md  mr-5 mt-2 ${
                  pathname == `/${el.menu_url}` && `bg-blue-200`
                }`}
                onClick={() => handleClick(el)}
              >
                <Stack direction={"row"} spacing={1}>
                  <span className="text-2xl block float-left">
                    {/* {el.icon} */}
                    <i className={`${el.menu_icon} fs-3`}></i>
                  </span>
                  <div>
                    <label
                      className={`w-40 text-base font-medium flex-1 absolute pt-1  ${
                        isOpen ? `visible` : `invisible`
                      }`}
                    >
                      {el.menu_name}
                    </label>
                  </div>
                </Stack>
              </li>
            ) : (
              <>
                <li
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md  mr-5 mt-2`}
                  onClick={() => handleClickMenu(el)}
                >
                  <Stack direction={"row"} spacing={18}>
                    <div>
                      <Stack direction={"row"} spacing={1}>
                        <span className="text-2xl block float-left">
                          {/* {el.icon} */}
                          <i className={`${el.menu_icon} fs-3`}></i>
                        </span>
                        <div>
                          <label
                            className={`w-40 text-base font-medium flex-1 absolute pt-1  ${
                              isOpen ? `visible` : `invisible`
                            }`}
                          >
                            {el.menu_name}
                          </label>
                        </div>
                      </Stack>
                    </div>
                    <div className={`${isOpen ? `visible` : `invisible`}`}>
                      {openSubmenu && checkMenu.menu_id == el.menu_id ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </div>
                  </Stack>
                </li>
                <div className={`${!isOpen && `hidden`}`}>
                  {openSubmenu && checkMenu.menu_id == el.menu_id ? (
                    <>
                      {el?.submenu.map((subMenu: any, index: number) => (
                        <li
                          key={index}
                          className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-1 px-10 hover:bg-gray-200 rounded-md mr-5 mt-2 ${
                            pathname == `/${subMenu.menu_url}` && `bg-blue-200`
                          }`}
                          onClick={() => handleClick(subMenu)}
                        >
                          <Stack direction={"row"} spacing={1}>
                            <span className="text-2xl block float-left">
                              {/* {el.icon} */}
                              <i className={`${subMenu.menu_icon} fs-3`}></i>
                            </span>
                            <div>
                              <label
                                className={`w-40 text-base font-medium flex-1 absolute pt-1`}
                              >
                                {subMenu.menu_name}
                              </label>
                            </div>
                          </Stack>
                        </li>
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
