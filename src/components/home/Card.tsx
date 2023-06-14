import { ReactElement } from "react";
import "../../assets/css/home/App.scss";
import * as React from 'react';


const Card: React.FC<any> = ({ data }): ReactElement => {
  return (
    <div className="App">
      <div className="card">
        <div className="card-content"> {data.name}</div>
        <div className="card-item">
          <table>
            <tbody>
              <tr>
                <td className="left-td">Type</td>
                <td></td>
                <td className="right-td"> <span>:</span> {data.type}</td>
              </tr>
              <tr>
                <td className="left-td">Dimension</td>
                <td></td>
                <td className="right-td"> <span className="colon">:</span>{data.dimension}</td>
              </tr>
              <tr>
                <td className="left-td">Resident count</td>
                <td></td>
                <td className="right-td"> <span>:</span> {data.residents.length}</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

    </div>

  );
};

export default Card;
