export interface Route {
  LoaderArgs: {
    request: Request;
    params: { year: string; month: string; day: string; };
  };
  ActionArgs: { request: Request };
  MetaFunction: (...args: any[]) => Array<{ title: string; description: string }>;
  ComponentProps: { 
    loaderData: { 
      year: number; 
      month: number; 
      day: number; 
    }; 
  };
  ErrorBoundaryProps: { error: unknown; };
}
