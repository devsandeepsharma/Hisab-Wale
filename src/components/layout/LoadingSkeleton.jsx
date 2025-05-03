import { Skeleton } from "../ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 p-6 w-full min-h-screen bg-background">
      <Skeleton className="h-12 w-full rounded-md" />
      <Skeleton className="h-4 w-full rounded-full" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Skeleton className="h-6 w-1/2" />
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-full rounded-md" />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-60 w-full rounded-md" />
        </div>
      </div>
      <Skeleton className="h-10 w-full rounded-md mt-auto" />
    </div>
  );
};

export default LoadingSkeleton;