import { Gaur } from "./gaur";
import { Video } from "./components/video/video";

// Main library exports - these are packaged in your distributable
export const isOdd = (n: number): boolean => {
  return !!(n & 1);
};

export { Gaur, Video };
