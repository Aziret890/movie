import React, { useEffect, useState } from "react";
import Popular from "../Popular/Popular";
import { useMainContext } from "../../contexts/Contexts";
import "./Popular.scss";
import { Button } from "antd";

function PopularMather() {
  const [ratedPage, setRatedPage] = useState(1);

  const { topPAtedFunction, pagesPopular } = useMainContext();
  useEffect(() => {
    topPAtedFunction(ratedPage);
  }, [ratedPage]);
  console.log(ratedPage);
  return (
    <>
      <div className="popular">
        <div className="container">
          <div className="popularGrid">
            {pagesPopular?.map((el) => (
              <div className="popularBlock">
                <Popular key={el.id} card={el} />
              </div>
            ))}
          </div>
          <div
            style={{
              marginBottom: "5pc",
              display: "flex",
              justifyContent: "space-around",
            }}
            className="btns"
          >
            <Button
              onClick={() => setRatedPage(ratedPage !== 1 ? ratedPage - 1 : 1)}
              style={{ padding: "20px", fontSize: "24px" }}
              type="link"
              danger
              size="large"
            >
              prev
            </Button>
            <Button
              onClick={() => setRatedPage(ratedPage + 1)}
              style={{ padding: "20px", fontSize: "24px" }}
              type="link"
              size="large"
            >
              next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularMather;
