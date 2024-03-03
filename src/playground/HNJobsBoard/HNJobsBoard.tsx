import useSWR from "swr";
import { arrayFetcher, fetcher } from "./api";
import { JobDetail } from "./components/JobDetail";
import type { JobDetailType } from "./types";

export function HNJobsBoard() {
  const { data: jobStoriesData, error: jobStoriesError } = useSWR(
    `v0/jobstories.json`,
    fetcher
  );
  const { data: jobDetailsData, error: jobDetailsError } = useSWR(
    () => jobStoriesData,
    arrayFetcher
  );

  if (!jobDetailsData) return <div>Loading job details...</div>;
  if (jobStoriesError || jobDetailsError)
    return <div>Error loading data: {jobStoriesError || jobDetailsError}</div>;

  return (
    <div>
      <h1>HN Jobs Board</h1>
      <ul>
        {jobDetailsData.map((detail: JobDetailType) => (
          <JobDetail key={detail.id} {...detail} />
        ))}
      </ul>
    </div>
  );
}
