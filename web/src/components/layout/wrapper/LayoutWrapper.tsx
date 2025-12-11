import { InitialLoader } from "./InitialLoader";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <InitialLoader>
      <div className="overflow-y-auto">

        <div
          className="
            px-4 sm:px-6 lg:px-8 xl:px-12
            max-w-7xl mx-auto
            space-y-6 lg:space-y-8
            py-6
          "
        >
          {children}
        </div>
      </div>
    </InitialLoader>
  );
}
