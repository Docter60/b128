const MIA_API_URL = process.env.MIA_API_URL || "http://localhost:5000";

export interface TopModeratorRequest {
  resultCapacity: string;
}

export interface TopModeratorElement {
  name: string;
  length: number;
}

export interface TopModeratorResults {
  results: TopModeratorElement[];
}

export const API_topModerators = async (request: TopModeratorRequest) => {
  let url = new URL(MIA_API_URL + "/api/v1/topModerators");
  Object.keys(request).forEach(key => url.searchParams.append(key, request[key]));
  return await fetch(url.toString(), {method: "GET"})
    .then((res) => res.json())
    .then((res) => {
      return res as TopModeratorResults;
    });
};

export interface TopSubredditRequest {
  resultCapacity: string;
}

export interface TopSubredditElement {
  name: string;
  length: number;
}

export interface TopSubredditResults {
  results: TopSubredditElement[];
}

export const API_topSubreddits = async (request: TopSubredditRequest) => {
  let url = new URL(MIA_API_URL + "/api/v1/topSubreddits");
  Object.keys(request).forEach(key => url.searchParams.append(key, request[key]));
  return await fetch(url.toString(), {method: "GET"})
    .then((res) => res.json())
    .then((res) => {
      return res as TopSubredditResults;
    });
};

export interface ModeratorQueryRequest {
  moderator: string;
  subCount: string;
  subCountRelation: string;
  resultCapacity: string;
}

export interface ModeratorQueryElement {
  name: string;
  subreddits: string[];
}

export interface ModeratorQueryResults {
  results: ModeratorQueryElement[];
}

export const API_moderatorQuery = async (query: ModeratorQueryRequest) => {
  let url = new URL(MIA_API_URL + "/api/v1/moderatorQuery");
  Object.keys(query).forEach(key => url.searchParams.append(key, query[key]));
  return await fetch(url.toString(), {method: "GET"})
    .then((res) => res.json())
    .then((res) => {
      return res as ModeratorQueryResults;
    });
};

export interface SubredditQueryRequest {
  subreddit: string;
  modCount: string;
  modCountRelation: string;
  resultCapacity: string;
}

export interface SubredditQueryElement {
  name: string;
  moderators: string[];
}

export interface SubredditQueryResults {
  results: SubredditQueryElement[];
}

export const API_subredditQuery = async (query: SubredditQueryRequest) => {
  let url = new URL(MIA_API_URL + "/api/v1/subredditQuery");
  Object.keys(query).forEach(key => url.searchParams.append(key, query[key]));
  return await fetch(url.toString(), {method: "GET"})
    .then((res) => res.json())
    .then((res) => {
      return res as SubredditQueryResults;
    });
};
