export interface INwRepository<TEntity> {
  findById(id: string | number): Promise<TEntity | undefined>;
}
