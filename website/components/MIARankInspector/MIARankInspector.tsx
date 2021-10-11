import React, { useState } from "react";
import { MIARankStyle } from "components/MIARankInspector/MIARankInspector.style";
import { Tab, Tabs } from "react-bootstrap";
import { Hamburger } from "components/HamburgerMenu/Hamburger";
import { HamburgerMenu } from "components/HamburgerMenu";
import { SubredditRankingTable } from "components/MIARankInspector/SubredditRankingTable";
import { ModeratorRankingTable } from "components/MIARankInspector/ModeratorRankingTable";

export const MIARankInspector: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [requestTopSubs, setRequestTopSubs] = useState(false);
  const [requestTopMods, setRequestTopMods] = useState(false);
  return (
    <div>
      <Hamburger open={open} setOpen={setOpen} variant="right" />
      <HamburgerMenu
        open={open}
        setOpen={setOpen}
        variant="right"
        header="Info / Rankings"
      >
        <MIARankStyle>
          <Tabs
            defaultActiveKey="info"
            variant="pills"
            onSelect={(k) => {
              if (k == "subreddits") {
                setRequestTopSubs(true);
              } else if (k == "moderators") {
                setRequestTopMods(true);
              }
            }}
          >
            <Tab eventKey="info" title="Info"></Tab>
            <Tab eventKey="subreddits" title="Subreddits">
              <SubredditRankingTable visible={requestTopSubs} />
            </Tab>
            <Tab eventKey="moderators" title="Moderators">
              <ModeratorRankingTable visible={requestTopMods} />
            </Tab>
          </Tabs>
        </MIARankStyle>
      </HamburgerMenu>
    </div>
  );
};
