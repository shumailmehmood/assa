import React, { ReactElement, useEffect, useState } from "react";
import Card from "../../components/home/Card";
import request from "../../api/request"
import "../../assets/css/home/App.scss"
import Paginating from "../../components/home/Paginator";

const Home: React.FC = (): ReactElement => {
  const [records, setRecord] = useState<any[]>([])
  const [metaData, setMetaData] = useState<any>(null)

  useEffect(() => {
    (async function fetchLocations() {
      let response: any = await request('GET', '/api/location', {})
      console.log(response)
      setRecord(response?.data?.results || [])
      setMetaData(response?.data?.info)
    })();
  }, [])

  function onChangeHandler(event: React.ChangeEvent<unknown>, page: number): void {
    console.log("Hum tumhhare hain sanam", event, page)
    request('GET', `/api/location?page=${page}`, {}).then(res => console.log(res.data)).catch(e => console.log(e))
  }
  return <>
    <section className="card-section">
      {records && records.map((row: any) => (<div className="card-align"
        key={row.id}><Card data={row} /></div>))}
      {metaData && <Paginating count={Math.ceil(metaData.count / 20)} onChangeHandler={onChangeHandler} />}
    </section>
  </>;
};

export default Home;
