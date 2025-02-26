import { forwardRef } from "react";
import { ProgressBackground, ProgressIndicator, ProgressRoot } from "./styles";

/**
 * ProgressBar component to display progress visually.
 *
 * @param {Object} props - The component props.
 * @param {number} props.value - Current progress value (required).
 * @param {number} [props.max=100] - Maximum progress value (optional, defaults to 100).
 * @param {React.Ref<HTMLDivElement>} [ref] - Optional ref for the progress bar container.
 * @returns {JSX.Element} The rendered ProgressBar component.
 */
const ProgressBar = forwardRef(({ value, max = 100, ...rest }, ref) => {
  return (
    <ProgressRoot {...rest}>
      <ProgressBackground value={value} ref={ref}>
        <ProgressIndicator value={value} max={max} />
      </ProgressBackground>
    </ProgressRoot>
  );
});

ProgressBar.displayName = "ProgressBar";

export default ProgressBar;
