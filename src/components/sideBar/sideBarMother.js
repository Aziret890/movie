import React from "react";
import { useMainContext } from "../../contexts/Contexts";
import SideBar from "./SideBar";
import { Button } from "antd";

function SideBarMother() {
  const { card, page, setPage } = useMainContext();
  console.log(window.pageYOffset);

  return (
    <section className="sideBar">
      <div className="container">
        <button onClick={window.scroll(0, 0)}></button>
        <div className="sideBar__content">
          <div className="sideBar__grid">
            {card?.map((el) => (
              <div className="sideBar__block">
                <SideBar key={el.id} card={el} />
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
            className="btns"
          >
            <Button
              onClick={() => setPage(page !== 1 ? page - 1 : 1)}
              style={{ padding: "20px", fontSize: "24px" }}
              type="link"
              danger
              size="large"
            >
              prev
            </Button>
            <Button
              onClick={() => setPage(page + 1)}
              style={{ padding: "20px", fontSize: "24px" }}
              type="link"
              size="large"
            >
              next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideBarMother;
