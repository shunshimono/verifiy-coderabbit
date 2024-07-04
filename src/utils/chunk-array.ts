/**
 * 与えられた配列を指定されたサイズのチャンク（部分配列）に分割する
 * @param data - 分割する元の配列
 * @param chunkSize - 各チャンクのサイズ
 * @returns  チャンクに分割された配列
 */
export function chunkArray<T>(data: T[], chunkSize: number) {
  const result = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    result.push(data.slice(i, i + chunkSize));
  }
  return result;
}
