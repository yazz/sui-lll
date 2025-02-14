import { css } from "styled-components";

export const marginCSS = css`
  ${({ m, theme }) => m && `margin: ${theme.spacing(m)}px`};
  ${({ mt, theme }) => mt && `margin-top: ${theme.spacing(mt)}px`};
  ${({ mb, theme }) => mb && `margin-bottom: ${theme.spacing(mb)}px`};
  ${({ mr, theme }) => mr && `margin-right: ${theme.spacing(mr)}px`};
  ${({ ml, theme }) => ml && `margin-left: ${theme.spacing(ml)}px`};
  ${({ mx, theme }) => mx && `margin-left: ${theme.spacing(mx)}px`};
  ${({ mx, theme }) => mx && `margin-right: ${theme.spacing(mx)}px`};
  ${({ my, theme }) => my && `margin-top: ${theme.spacing(my)}px`};
  ${({ my, theme }) => my && `margin-bottom: ${theme.spacing(my)}px`};
`;

export const paddingCSS = css`
  ${({ p, theme }) => p && `padding: ${theme.spacing(p)}px`};
  ${({ pt, theme }) => pt && `padding-top: ${theme.spacing(pt)}px`};
  ${({ pb, theme }) => pb && `padding-bottom: ${theme.spacing(pb)}px`};
  ${({ pr, theme }) => pr && `padding-right: ${theme.spacing(pr)}px`};
  ${({ pl, theme }) => pl && `padding-left: ${theme.spacing(pl)}px`};
  ${({ px, theme }) => px && `padding-left: ${theme.spacing(px)}px`};
  ${({ px, theme }) => px && `padding-right: ${theme.spacing(px)}px`};
  ${({ py, theme }) => py && `padding-top: ${theme.spacing(py)}px`};
  ${({ py, theme }) => py && `padding-bottom: ${theme.spacing(py)}px`};
`;

export const centerCss = css`
  ${({ center }) => center && "textAlign: center"};
`;

export const absolutePosition = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
