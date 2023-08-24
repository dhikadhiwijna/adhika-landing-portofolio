import { RefObject } from "react";

const LiIcon = () => {
  return (
    <figure className="absolute left-0 stroke-primary">
      <svg className="-rotate-90" width={75} height={75} viewBox="0 0 100 100">
        <circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-3 fill-white stroke-accent"
        />
        <circle cx={75} cy={50} r={10} className="fill-accent" />

        <circle
          cx={75}
          cy={50}
          r={10}
          className="animate-pulse fill-white stroke-accent stroke-1"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
