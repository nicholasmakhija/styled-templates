import styled, { style } from '@n3e/styled';
import { asRem } from './utils';

import type { CSSProperties } from '@n3e/styled';

const boxSizing = `
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
`;

const htmlAndBody = `
  body,
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

const html = `
  html {
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }
`;

const body = `
  body {
    font-size: 16px;
    line-height: 24px;
    font-family: Verdana, sans-serif;
    color: rgb(246, 247, 249);
    background-color:rgb(35, 39, 47);
  }
`;

export const AppRoot = styled
  .div()
  .withCSS(
    boxSizing,
    html,
    htmlAndBody,
    body
  );

type ButtonVariants = 'solid' | 'outline';

const variantMap: { [key in ButtonVariants]: CSSProperties } = {
  solid: {
    borderColor: 'transparent',
    backgroundColor: 'rgb(88 196 220)',
    [style.disabled]: {
      cursor: 'not-allowed',
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      color: 'rgba(255, 255, 255, 0.3)',  
    }
  },
  outline: {
    borderColor: 'rgb(88 196 220)',
    color: 'rgb(88 196 220)',
    backgroundColor: 'transparent',
    [style.disabled]: {
      cursor: 'not-allowed',
      borderColor: 'rgba(255, 255, 255, 0.3)',
      color: 'rgba(255, 255, 255, 0.3)',  
    }
  }
};

export const Button = styled.button<{
  children?: React.ReactNode;
  disabled?: boolean;
  variant?: ButtonVariants;
  onClick?: (e: Event) => void;
}>({
  ...variantMap.solid,
  display: 'inline-block',
  margin: 0,
  padding: `${asRem(6)} ${asRem(18)}`,
  width: 'auto',
  appearance: 'none',
  verticalAlign: 'middle',
  color: '#fff',
  fontSize: asRem(14),
  lineHeight: asRem(24),
  fontWeight: 'normal',
  fontFamily: 'Verdana, sans-serif',
  textAlign: 'center',
  textDecoration: 'none',
  cursor: 'pointer',
  borderWidth: asRem(2),
  borderStyle: 'solid',
  borderRadius: asRem(4),
  [style.props.any('variant')]: (variant: ButtonVariants) => variantMap[variant] 
});

export const Code = styled.code({
  display: 'inline-block',
  margin: 0,
  padding: `${asRem(4)} ${asRem(6)}`,
  fontSize: asRem(12),
  lineHeight: asRem(16),
  color: '#ff69b4',
  borderRadius: asRem(2),
  backgroundColor: '#ddd',
  fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  verticalAlign: 'top',
});

const CONTAINER_WIDTHS = {
  XS: 100,
  SM: 540,
  MD: 720,
  LG: 960,
  XL: 1140
};

const GUTTER_WIDTH = 16;


export const Container = styled.div<{
  children?: React.ReactNode;
  className?: string;
  isFluid?: boolean;
  isFullWidth?: boolean;
  isVerticallyCentred?: boolean;
}>({
  width: `${CONTAINER_WIDTHS.XS}%`,
  paddingRight: asRem(GUTTER_WIDTH),
  paddingLeft: asRem(GUTTER_WIDTH),
  marginRight: 'auto',
  marginLeft: 'auto',
  '@media screen and (min-width: 768px)': {
    maxWidth: asRem(CONTAINER_WIDTHS.MD)
  },
  '@media screen and (min-width: 992)': {
    maxWidth: asRem(CONTAINER_WIDTHS.LG)
  },
  '@media screen and (min-width: 1200px)': {
    maxWidth: asRem(CONTAINER_WIDTHS.XL)
  },
  [style.prop('isVerticallyCentred')]: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh'
  },
  [style.prop('isFullWidth')]: {
    maxWidth: `${CONTAINER_WIDTHS.XS}%`
  },
  [style.prop('isFluid')]: {
    paddingRight: 0,
    paddingLeft: 0
  }
});

type JustifyContentOptions = 
  | 'start'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

type ParadigmDirection = 'bottom' | 'right';

const directionMap: Record<string, CSSProperties> = {
  bottom: {
    marginBottom: asRem(24)
  },
  right: {
    marginRight: asRem(24)
  }
}

export const Box = styled.div<{
  children?: React.ReactNode;
  className?: string;
  flex?: JustifyContentOptions;
  paradigm?: ParadigmDirection;
}>({
  width: '100%',
  [style.prop('flex')]: (justifyContent: JustifyContentOptions) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent
  }),
  [style.prop('paradigm')]: (direction: ParadigmDirection) => ({
    [style.selector('> *')]: {
      [style.not(style.lastChild)]: directionMap[direction]
    }
  })
});

export const Image = styled.img<{
  alt: string;
  src: string;
}>({
  display: 'block',
  width: asRem(48)
});

export const Text = styled.span<{
  children?: React.ReactNode;
  size?: number;
}>({
  [style.prop('size')]: (size: number) => ({
    fontSize: asRem(size),
    lineHeight: asRem(size * 1.5)
  })
});

