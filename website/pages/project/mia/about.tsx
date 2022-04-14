import React, { useEffect } from "react";
import AOS from "aos";
import { ProjectPageHeader } from "components/ProjectPageHeader";

const MIAAboutPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <ProjectPageHeader
        name="MIA"
        nameColor="rgb(158, 58, 58)"
        nameShadow="0 0 5px red"
      />
      <div
        style={{
          color: "white",
          inlineSize: "80%",
          padding: "10%",
          fontSize: 20,
        }}
      >
        <p>
          The Moderator Influence Analyzer (MIA) is a visualization tool used to
          graph Reddit's moderators to their respective subreddits. The
          visualization is a 3D graph consisting of nodes and edges. Nodes
          represent either a subreddit or a moderator and edges connect the
          moderator to the subreddits they moderate.
        </p>
        <p>
          The query menu can be shown/hidden with the left hamburger menu
          toggle. Queries focus on filtering moderators and subreddits. The
          subreddit query can accept search strings, a filter for how many
          moderators exist on the subreddit, and a return capacity. Moderator
          queries are similar but filter for how many subreddits are moderated
          by a specific user. Submissions should return a 3D graph defined by
          the query parameters.
        </p>
        <p>
          The query menu can be shown/hidden with the right hamburger menu
          toggle.  Tabs can be shown by selecting from the top row of buttons.
          The Info tab should display informaion about a node on the graph 
          that is selected by the left mouse button.  Info entries will link 
          to the moderators/subreddits connected to the node.  The Subreddits 
          and Moderators tabs should show the top 100 Subredits/Moderators 
          according to their respective moderation/subreddit count.
        </p>
      </div>
    </div>
  );
};

export default MIAAboutPage;
