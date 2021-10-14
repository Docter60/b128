import React, { useState } from "react";
import { HamburgerMenu } from "components/HamburgerMenu";
import { Hamburger } from "components/HamburgerMenu/Hamburger";
import { SubredditQueryForm } from "components/MIAQueryInspector/SubredditQueryForm";
import { ModeratorQueryForm } from "components/MIAQueryInspector/ModeratorQueryForm";
import {
  SubredditFormStyle,
  ModeratorFormStyle,
} from "components/MIAQueryInspector/MIAQueryInspector.style";
import { API_moderatorQuery, API_subredditQuery } from "Constants";
import { submitGraphData } from 'MIAGraphWrapper';

type ResponseData = {
  results: any[];
};

export function MIAQueryInspector() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Hamburger open={open} setOpen={setOpen} variant="left" />
      <HamburgerMenu
        open={open}
        setOpen={setOpen}
        variant="left"
        header="Queries"
      >
        <SubredditFormStyle>
          <SubredditQueryForm
            onSubmit={(values) => {
              return new Promise(async (resolve) => {
                let req = {...values};
                if(req.subreddit === "") delete req.subreddit;
                console.log(req);
                const data = await API_subredditQuery(req);
                console.log(data.results);
                submitGraphData(data);
                resolve(data);
              });
            }}
          />
        </SubredditFormStyle>

        <ModeratorFormStyle>
          <ModeratorQueryForm
            onSubmit={(values) => {
              return new Promise(async (resolve) => {
                let req = {...values};
                if(req.moderator === "") delete req.moderator;
                console.log(req);
                const data = await API_moderatorQuery(req);
                console.log(data.results);
                submitGraphData(data);
                resolve(data);
              });
            }}
          />
        </ModeratorFormStyle>
      </HamburgerMenu>
    </div>
  );
}
