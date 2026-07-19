import { Card } from "../../../../components";
import type { StatCardProps } from "./stat-card.types";
import { cardStyles } from "./stat-card.styles";

const StatCard = ({
  title,
  value,
  icon: Icon,
  color = "bg-indigo-500",
  change,
}: StatCardProps) => {
  return (
    <Card className={cardStyles}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>

          {change && (
            <p className="mt-2 text-sm font-medium text-green-600">
              {change} this month
            </p>
          )}
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl text-white ${color}`}
        >
          <Icon size={28} />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;