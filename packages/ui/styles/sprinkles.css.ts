import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "block", "inline", "flex", "grid"],
    position: ["absolute", "relative", "fixed"],
    top: ["0"],
    right: ["0"],
    width: ["100%", "auto"],
    height: ["100%", "auto"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];

// 이 파일을 import하면 sprinkles가 사용 가능해집니다
export {};
