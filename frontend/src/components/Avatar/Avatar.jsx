import { forwardRef } from "react";
import { AvatarRoot, AvatarImage, AvatarFallback } from "./styles";

/**
 * Avatar component using Radix UI.
 *
 * @param {Object} props - Component props.
 * @param {string} props.src - Image URL for the avatar.
 * @param {string} [props.alt] - Alternative text for accessibility.
 * @param {string} [props.fallbackText] - Text to display when the image fails to load.
 * @returns {JSX.Element} The Avatar component.
 */
const Avatar = forwardRef(
  ({ src, alt = "User Avatar", fallbackText = "?" }, ref) => (
    <AvatarRoot ref={ref}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback delayMs={600}>{fallbackText}</AvatarFallback>
    </AvatarRoot>
  )
);

Avatar.displayName = "Avatar";

export default Avatar;
