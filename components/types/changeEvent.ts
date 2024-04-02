export type ChangeEvent = Event & {
  target: {
    value?: string | undefined;
  };
};
