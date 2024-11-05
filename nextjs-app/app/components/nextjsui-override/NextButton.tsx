// MyButton.tsx
import {extendVariants, Button} from "@nextui-org/react";

export const NextButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      primary: "border border-blue-400 bg-blue-400 text-white hover:bg-transparent hover:text-blue-400 transition-all duration-300 ease-in-out",
      secondary: "border border-white bg-white text-grey-900 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300 ease-in-out",
      primaryOutline: "border border-blue-400 text-blue-400 bg-transparent hover:bg-blue-400 hover:text-white transition-all duration-300 ease-in-out",
    },
    isDisabled: {
      true: "opacity-70",
    },
    radius: {
        full: "rounded-[500px]"
    },
    size: {
      xs: "px-4 py-2 text-[14px] rounded-[500px]",
      md: "px-6 py-4 text-[16px] rounded-[500px]",
      xl: "px-10 py-6 text-[24px] rounded-[500px]",
    },
  },
  defaultVariants: { // <- modify/add default variants
    color: "primary",
    size: "xl",
  },
  compoundVariants: [ // <- modify/add compound variants
    {
      isDisabled: true,
      color: "primary",
    },
  ],
});