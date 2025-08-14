export interface Route {
  LoaderArgs: { 
    request: Request;
    params: {
      period: string;
    };
  };
  ActionArgs: { request: Request };
  MetaFunction: (...args: any[]) => Array<{ title: string; description: string }>;
  ComponentProps: Record<string, unknown>;
}
