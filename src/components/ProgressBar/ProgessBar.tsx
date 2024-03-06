import "./ProgressBar.css";

const MIN = 0;
const MAX = 100;

export function ProgressBar({ value = 50 }: { value?: number }) {
  const validValue = Math.min(Math.max(value, MIN), MAX);

  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${validValue}%` }}>
        {`${validValue}%`}
      </div>
    </div>
  );
}
