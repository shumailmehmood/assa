import React, { ReactElement, useState } from "react";
import Card from "../../components/home/Card";
import "../../assets/css/home/App.scss";
import Paginating from "../../components/home/Paginator";
import { useGetLocationsQuery } from "../../store/services/locations";
import Skeleton from "@mui/material/Skeleton";

const Home: React.FC = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState<any>(1);
  const {
    data: locations,
    isLoading,
    // isSuccess,
    // isError,
    // error,
  } = useGetLocationsQuery(currentPage);

  function onChangeHandler(
    event: React.ChangeEvent<unknown>,
    page: number
  ): void {
    setCurrentPage(page);
  }

  function onRouteChange() {
    // locate("/location");
  }

  if (isLoading) {
    return (
      <div className="card-section">
        {new Array(20).fill(0).map(() => (
          <Skeleton variant="rectangular" width={420} height={130} />
        ))}
      </div>
    );
  }
  return (
    <>
      <section className="card-section">
        <div className="cards">
          {locations &&
            locations.results.map((row: any) => (
              <div className="card-align" key={row.id}>
                <Card data={row} />
              </div>
            ))}
        </div>
        <div className="pagination">
          {locations && (
            <Paginating
              count={Math.ceil(locations.info.count / 20)}
              onChangeHandler={onChangeHandler}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
