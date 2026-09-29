export default function ProductCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="flex h-full animate-pulse gap-4 p-5 sm:min-h-117.5 sm:flex-col sm:gap-0 sm:px-3"
    >
      <div className="flex w-40 shrink-0 flex-col sm:contents">
        <div className="mb-2 h-3.5 w-16 rounded bg-neutral-200 sm:mb-1" />

        <div className="relative mb-1 flex flex-col sm:h-71.25 sm:flex-none">
          <div className="mx-auto h-36 w-36 rounded-lg bg-neutral-200 sm:mt-3 sm:h-56 sm:w-56" />
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-end sm:px-1">
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-neutral-200" />
          <div className="h-3 w-3/4 rounded bg-neutral-200" />
        </div>

        <div className="mt-4 flex min-h-8 flex-row-reverse items-center justify-between">
          <div className="h-3 w-10 rounded bg-neutral-200" />
          <div className="h-3 w-24 rounded bg-neutral-200" />
        </div>

        <div className="mt-2 flex flex-row-reverse items-center justify-between">
          <div className="h-5 w-24 rounded bg-neutral-200" />
          <div className="h-5 w-10 rounded-full bg-neutral-200" />
        </div>

        <div className="ms-auto mt-2 h-3 w-20 rounded bg-neutral-200" />
      </div>
    </div>
  );
}
