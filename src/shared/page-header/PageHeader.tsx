import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backTo: string;
  backLabel: string;
}

const PageHeader = ({
  title,
  subtitle,
  backLabel,
  backTo = "/",
}: PageHeaderProps) => {
  return (
    <div className="my-12 flex flex-col">
      <Link
        to={backTo}
        className="flex items-center justify-start text-sm text-gray-500 gap-2 mb-4"
      >
        <ChevronLeft className="h-4 w-4" /> {backLabel}
      </Link>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <span className="text-gray-500">{subtitle}</span>
    </div>
  );
};

export default PageHeader;
