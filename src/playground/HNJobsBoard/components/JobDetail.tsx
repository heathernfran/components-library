import type { JobDetailType } from "../types";

export function JobDetail({ time, title, url }: JobDetailType) {
  const renderTitle = () =>
    url ? (
      <a href={url} rel="noopener noreferrer" target="_blank">
        {title}
      </a>
    ) : (
      <span>{title}</span>
    );

  return (
    <li>
      <h2>{renderTitle()}</h2>
      <span>{new Date(time).toTimeString()}</span>
    </li>
  );
}
