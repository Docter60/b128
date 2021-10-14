import { API_topModerators } from "Constants";
import React, { useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { ModeratorTableStyle } from "./ModeratorRankingTable.style";

interface Props {
  visible: boolean;
}

export const ModeratorRankingTable = (props: Props) => {
  const [requestedData, setRequestedData] = useState(false);
  const [table, setTable] = useState(
    <div>
      <Spinner
        animation="border"
        variant="secondary"
        style={{
          width: "100px",
          height: "100px",
          margin: "calc(50% - 50px)",
        }}
      />
    </div>
  );
  if (props.visible && !requestedData) {
    const fetchData = async () => {
      const data = await API_topModerators({ resultCapacity: "100" });
      let i = 1;
      const rows = [];
      for (const r of data.results) {
        rows.push(
          <tr key={r.name}>
            <td>{i}</td>
            <td>
              <a
                href={"https://www.reddit.com/u/" + r.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {r.name}
              </a>
            </td>
            <td>{r.length}</td>
          </tr>
        );
        i += 1;
      }
      setTable(
        <ModeratorTableStyle>
          <Table variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Moderator</th>
                <th>Subs</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </ModeratorTableStyle>
      );
    };
    fetchData();
    setRequestedData(true);
    setTimeout(() => {
      setRequestedData(false);
    }, 60000);
  }
  return table;
};
