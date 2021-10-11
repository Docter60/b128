import React, { useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { SubredditTableStyle } from "./SubredditRankingTable.style";
import { API_topSubreddits } from "Constants";

interface Props {
  visible: boolean;
}

export const SubredditRankingTable: React.FC<Props> = (props: Props) => {
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
      const data = await API_topSubreddits({ resultCapacity: "100" });
      let i = 1;
      const rows = [];
      for (const r of data.results) {
        rows.push(
          <tr key={r.name}>
            <td>{i}</td>
            <td>
              <a
                href={"https://www.reddit.com/r/" + r.name}
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
        <SubredditTableStyle>
          <Table variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Subreddit</th>
                <th>Mods</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </SubredditTableStyle>
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
