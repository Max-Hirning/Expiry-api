type Disconnectable = {
    $disconnect: () => Promise<void> | void;
};

export const withRepositories = async <
    const TRepos extends readonly Disconnectable[],
    TResult,
>(
    repos: TRepos,
    fn: (...repos: TRepos) => Promise<TResult>
): Promise<TResult> => {
    try {
        return await fn(...repos);
    } finally {
        await Promise.allSettled(repos.map((repo) => repo.$disconnect()));
    }
};
