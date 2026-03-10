declare module '@barba/core' {
  type Transition = {
    name?: string;
    leave?: () => void | Promise<void>;
  };

  type InitOptions = {
    transitions?: Transition[];
    preventRunning?: boolean;
    prevent?: () => boolean;
  };

  const barba: {
    init: (options?: InitOptions) => void;
    destroy: () => void;
  };

  export default barba;
}
