import { Skeleton } from "@/shared/ui/skeleton";

const CardDestinationSkeleton = () => (
  <div className="flex flex-col gap-2 justify-center border rounded-lg">
    <Skeleton className="w-full h-96 object-cover" />
    <div className="flex flex-col p-4 gap-4">
      <div className="flex flex-col gap-1">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-16" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
        </div>
        <Skeleton className="h-8 w-24" />
      </div>
    </div>
  </div>
);

export default CardDestinationSkeleton;
