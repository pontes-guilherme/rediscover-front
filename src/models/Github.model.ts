export interface GithubRepositoryLangs {
    [lang: string]: number;
}

export interface Author {
    avatar_url: string
    id: number
    login: string
    url: string
    type: 'Bot' | 'User'
}

export interface Commit {
    message: string;
    committer: {
        date: string;
    }
}

export interface GithubRepositoryCommit {
    author: Author;
    commit: Commit
    sha: string;
    url: string;
}

export interface GithubRepositoryDetails {
    name: string
    description: string
    stargazers_count: number
    languages: GithubRepositoryLangs
    commits: GithubRepositoryCommit[]
    contributors: Author[]
}
