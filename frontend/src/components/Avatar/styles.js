import styled from "styled-components";
import { Avatar as RadixAvatar } from "radix-ui";

export const AvatarRoot = styled(RadixAvatar.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: #e0e0e0;
  user-select: none;
`;

export const AvatarImage = styled(RadixAvatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const AvatarFallback = styled(RadixAvatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background-color: #6b7280;
  border-radius: inherit;
`;
