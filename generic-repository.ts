export interface INwRepository<T> {
  findById(id: string | number): Promise<T | undefined>;
}
