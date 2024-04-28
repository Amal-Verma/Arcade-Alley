export default function make2dArr(rows, cols, val) {
  return Array.from({ length: rows }, () => new Array(cols).fill(val));
}