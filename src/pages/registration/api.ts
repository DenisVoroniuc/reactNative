export type FakeApi = {
  status: "success";
};

const data = {
  status: "success",
} as const;

export const submit = (): Promise<FakeApi> => new Promise<FakeApi>(resolve => setTimeout(() => resolve(data), 2000));
