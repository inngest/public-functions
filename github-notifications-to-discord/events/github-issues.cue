{
  name: string
  data: {
    issue: {
      comments: int
      number:   int
      assignees: [...{
        organizations_url:   string
        url:                 string
        login:               string
        gravatar_id:         string
        html_url:            string
        site_admin:          bool
        type:                string
        followers_url:       string
        events_url:          string
        following_url:       string
        gists_url:           string
        id:                  int
        received_events_url: string
        repos_url:           string
        starred_url:         string
        avatar_url:          string
        subscriptions_url:   string
        node_id:             string
      }]
      body:                     string
      comments_url:             string
      state:                    string
      id:                       int
      performed_via_github_app: _
      user: {
        following_url:       string
        gists_url:           string
        html_url:            string
        subscriptions_url:   string
        events_url:          string
        id:                  int
        login:               string
        node_id:             string
        received_events_url: string
        starred_url:         string
        followers_url:       string
        gravatar_id:         string
        repos_url:           string
        url:                 string
        avatar_url:          string
        organizations_url:   string
        site_admin:          bool
        type:                string
      }
      labels: [...{
        url:         string
        color:       string
        default:     bool
        description: string
        id:          int
        name:        string
        node_id:     string
      }]
      timeline_url:       string
      labels_url:         string
      repository_url:     string
      state_reason:       _
      updated_at:         string
      title:              string
      url:                string
      active_lock_reason: _
      assignee: {
        repos_url:           string
        events_url:          string
        gravatar_id:         string
        id:                  int
        organizations_url:   string
        following_url:       string
        subscriptions_url:   string
        type:                string
        site_admin:          bool
        url:                 string
        avatar_url:          string
        followers_url:       string
        node_id:             string
        received_events_url: string
        gists_url:           string
        html_url:            string
        login:               string
        starred_url:         string
      }
      author_association: string
      node_id:            string
      events_url:         string
      reactions: {
        "-1":        int
        eyes:        int
        heart:       int
        hooray:      int
        laugh:       int
        rocket:      int
        url:         string
        "+1":        int
        confused:    int
        total_count: int
      }
      milestone:  _
      closed_at:  _
      created_at: string
      html_url:   string
      locked:     bool
    }
    organization: {
      avatar_url:         string
      description:        string
      events_url:         string
      hooks_url:          string
      id:                 int
      issues_url:         string
      login:              string
      members_url:        string
      repos_url:          string
      url:                string
      node_id:            string
      public_members_url: string
    }
    repository: {
      compare_url:       string
      contents_url:      string
      issue_events_url:  string
      keys_url:          string
      clone_url:         string
      has_issues:        bool
      notifications_url: string
      pushed_at:         string
      trees_url:         string
      watchers:          int
      fork:              bool
      homepage:          string
      id:                int
      language:          string
      mirror_url:        _
      size:              int
      collaborators_url: string
      deployments_url:   string
      events_url:        string
      full_name:         string
      hooks_url:         string
      default_branch:    string
      forks:             int
      git_commits_url:   string
      statuses_url:      string
      visibility:        string
      watchers_count:    int
      created_at:        string
      has_downloads:     bool
      comments_url:      string
      has_wiki:          bool
      issues_url:        string
      owner: {
        followers_url:       string
        following_url:       string
        gists_url:           string
        id:                  int
        organizations_url:   string
        received_events_url: string
        site_admin:          bool
        starred_url:         string
        subscriptions_url:   string
        type:                string
        avatar_url:          string
        gravatar_id:         string
        html_url:            string
        node_id:             string
        events_url:          string
        login:               string
        repos_url:           string
        url:                 string
      }
      updated_at:     string
      archive_url:    string
      commits_url:    string
      milestones_url: string
      teams_url:      string
      topics: [...string]
      forks_count:   int
      git_refs_url:  string
      ssh_url:       string
      allow_forking: bool
      blobs_url:     string
      license: {
        url:     _
        key:     string
        name:    string
        node_id: string
        spdx_id: string
      }
      name:              string
      subscribers_url:   string
      tags_url:          string
      branches_url:      string
      assignees_url:     string
      description:       string
      forks_url:         string
      is_template:       bool
      releases_url:      string
      archived:          bool
      contributors_url:  string
      disabled:          bool
      downloads_url:     string
      git_tags_url:      string
      git_url:           string
      has_pages:         bool
      labels_url:        string
      open_issues_count: int
      private:           bool
      pulls_url:         string
      stargazers_count:  int
      stargazers_url:    string
      html_url:          string
      languages_url:     string
      merges_url:        string
      node_id:           string
      url:               string
      has_projects:      bool
      issue_comment_url: string
      open_issues:       int
      subscription_url:  string
      svn_url:           string
    }
    sender: {
      events_url:          string
      followers_url:       string
      html_url:            string
      login:               string
      node_id:             string
      type:                string
      site_admin:          bool
      starred_url:         string
      subscriptions_url:   string
      url:                 string
      avatar_url:          string
      gists_url:           string
      id:                  int
      received_events_url: string
      following_url:       string
      gravatar_id:         string
      organizations_url:   string
      repos_url:           string
    }
    action: string
  }
  ts: int
}