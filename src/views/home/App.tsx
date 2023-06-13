import React, { ReactElement, useState } from "react";
import Card from "../../components/home/Card";
import "../../assets/css/home/App.scss"
import Paginating from "../../components/home/Paginator";
import { useGetLocationsQuery } from "../../store/services/locations"
import Skeleton from '@mui/material/Skeleton';
// import history from "../../utils/history";
import { useHistory, useLocation } from 'react-router-dom'



const Home: React.FC = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState<any>(1)
  const history = useHistory();
  const locate = useLocation();
  const {
    data,
    isLoading,
    // isSuccess,
    // isError,
    // error,
  } = useGetLocationsQuery(currentPage)

  function onChangeHandler(event: React.ChangeEvent<unknown>, page: number): void {
    setCurrentPage(page)
  }

  function onRouteChange() {
    locate('/location')
  }

  if (isLoading) {
    return <div className="card-section">
      {new Array(20).fill(0).map(() => <Skeleton variant="rectangular" width={420} height={130} />)}
    </div>
  }
  return <>
    <section className="card-section">
      <div className="cards">
        {data && data.results.map((row: any) => (<div className="card-align" onClick={onRouteChange}
          key={row.id}><Card data={row} /></div>))}
      </div>
      <div className="pagination">
        {data && <Paginating count={Math.ceil(data.info.count / 20)} onChangeHandler={onChangeHandler} />}
      </div>
    </section>

  </>;
};

export default Home;
