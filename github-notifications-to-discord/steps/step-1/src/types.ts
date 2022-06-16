// Generated via inngest init

export interface Label {
  url: string;
  color: string;
  default: boolean;
  description: string;
  id: number;
  name: string;
  node_id: string;
}

export interface Issue {
  comments: number;
  number: number;
  assignees: Array<{
    organizations_url: string;
    url: string;
    login: string;
    gravatar_id: string;
    html_url: string;
    site_admin: boolean;
    type: string;
    followers_url: string;
    events_url: string;
    following_url: string;
    gists_url: string;
    id: number;
    received_events_url: string;
    repos_url: string;
    starred_url: string;
    avatar_url: string;
    subscriptions_url: string;
    node_id: string;
  }>;
  body: string;
  comments_url: string;
  state: string;
  id: number;
  performed_via_github_app: unknown;
  user: {
    following_url: string;
    gists_url: string;
    html_url: string;
    subscriptions_url: string;
    events_url: string;
    id: number;
    login: string;
    node_id: string;
    received_events_url: string;
    starred_url: string;
    followers_url: string;
    gravatar_id: string;
    repos_url: string;
    url: string;
    avatar_url: string;
    organizations_url: string;
    site_admin: boolean;
    type: string;
  };
  labels: Array<Label>;
  timeline_url: string;
  labels_url: string;
  repository_url: string;
  state_reason: unknown;
  updated_at: string;
  title: string;
  url: string;
  active_lock_reason: unknown;
  assignee: {
    repos_url: string;
    events_url: string;
    gravatar_id: string;
    id: number;
    organizations_url: string;
    following_url: string;
    subscriptions_url: string;
    type: string;
    site_admin: boolean;
    url: string;
    avatar_url: string;
    followers_url: string;
    node_id: string;
    received_events_url: string;
    gists_url: string;
    html_url: string;
    login: string;
    starred_url: string;
  };
  author_association: string;
  node_id: string;
  events_url: string;
  reactions: {
    "-1": number;
    eyes: number;
    heart: number;
    hooray: number;
    laugh: number;
    rocket: number;
    url: string;
    "+1": number;
    confused: number;
    total_count: number;
  };
  milestone: unknown;
  closed_at: unknown;
  created_at: string;
  html_url: string;
  locked: boolean;
}

export interface GithubIssues {
  name: string;
  data: {
    issue: Issue;
    organization: {
      avatar_url: string;
      description: string;
      events_url: string;
      hooks_url: string;
      id: number;
      issues_url: string;
      login: string;
      members_url: string;
      repos_url: string;
      url: string;
      node_id: string;
      public_members_url: string;
    };
    repository: {
      compare_url: string;
      contents_url: string;
      issue_events_url: string;
      keys_url: string;
      clone_url: string;
      has_issues: boolean;
      notifications_url: string;
      pushed_at: string;
      trees_url: string;
      watchers: number;
      fork: boolean;
      homepage: string;
      id: number;
      language: string;
      mirror_url: unknown;
      size: number;
      collaborators_url: string;
      deployments_url: string;
      events_url: string;
      full_name: string;
      hooks_url: string;
      default_branch: string;
      forks: number;
      git_commits_url: string;
      statuses_url: string;
      visibility: string;
      watchers_count: number;
      created_at: string;
      has_downloads: boolean;
      comments_url: string;
      has_wiki: boolean;
      issues_url: string;
      owner: {
        followers_url: string;
        following_url: string;
        gists_url: string;
        id: number;
        organizations_url: string;
        received_events_url: string;
        site_admin: boolean;
        starred_url: string;
        subscriptions_url: string;
        type: string;
        avatar_url: string;
        gravatar_id: string;
        html_url: string;
        node_id: string;
        events_url: string;
        login: string;
        repos_url: string;
        url: string;
      };
      updated_at: string;
      archive_url: string;
      commits_url: string;
      milestones_url: string;
      teams_url: string;
      topics: Array<string>;
      forks_count: number;
      git_refs_url: string;
      ssh_url: string;
      allow_forking: boolean;
      blobs_url: string;
      license: {
        url: unknown;
        key: string;
        name: string;
        node_id: string;
        spdx_id: string;
      };
      name: string;
      subscribers_url: string;
      tags_url: string;
      branches_url: string;
      assignees_url: string;
      description: string;
      forks_url: string;
      is_template: boolean;
      releases_url: string;
      archived: boolean;
      contributors_url: string;
      disabled: boolean;
      downloads_url: string;
      git_tags_url: string;
      git_url: string;
      has_pages: boolean;
      labels_url: string;
      open_issues_count: number;
      private: boolean;
      pulls_url: string;
      stargazers_count: number;
      stargazers_url: string;
      html_url: string;
      languages_url: string;
      merges_url: string;
      node_id: string;
      url: string;
      has_projects: boolean;
      issue_comment_url: string;
      open_issues: number;
      subscription_url: string;
      svn_url: string;
    };
    sender: {
      events_url: string;
      followers_url: string;
      html_url: string;
      login: string;
      node_id: string;
      type: string;
      site_admin: boolean;
      starred_url: string;
      subscriptions_url: string;
      url: string;
      avatar_url: string;
      gists_url: string;
      id: number;
      received_events_url: string;
      following_url: string;
      gravatar_id: string;
      organizations_url: string;
      repos_url: string;
    };
    action: string;
  };
  ts: number;
}

export type EventTriggers = GithubIssues;

export type Args = {
  event: EventTriggers;
  steps: {
    [clientID: string]: any;
  };
};