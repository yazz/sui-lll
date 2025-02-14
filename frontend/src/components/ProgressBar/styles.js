import styled from "styled-components";
import { Progress } from "radix-ui";
import { marginCSS, paddingCSS } from "../Css";

export const ProgressRoot = styled.div`
  width: 100%;
  ${marginCSS};
  ${paddingCSS};
`;

export const ProgressBackground = styled(Progress.Root)`
  position: relative;
  overflow: hidden;
  background: #e0e0e0;
  border-radius: 9999px;
  width: 100%;
  height: 25px;
`;

export const ProgressIndicator = styled(Progress.Indicator)`
  background: ${({ theme }) => theme.palette.brand.main};
  height: 100%;
  width: 100%;
  transform: ${({ value, max }) => `translateX(-${max - value}%)`};
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
  border-radius: 9999px;
`;
