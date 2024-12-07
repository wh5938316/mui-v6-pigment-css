'use client';

import DefaultPropsProvider from '@mui/material/DefaultPropsProvider';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

import {
  CheckBoxOutlineBlankIcon,
  CheckIcon,
  DeleteIcon,
  ExpandMoreIcon,
  RemoveIcon,
  UnfoldMoreIcon,
} from '@kwest-io/icons';

interface MuiProviderProps {
  children: React.ReactNode;
}

export default function MuiProvider(props: MuiProviderProps) {
  const { children } = props;

  return (
    <DefaultPropsProvider
      value={{
        MuiButtonGroup: {
          disableRipple: true,
        },
        MuiButton: {
          disableRipple: true,
        },
        MuiButtonBase: {
          disableTouchRipple: true,
          disableRipple: true,
        },
        MuiIconButton: {
          disableRipple: true,
          variant: 'soft' as const,
        },
        MuiSvgIcon: {
          fontSize: 'small',
        },
        MuiTooltip: {
          slotProps: {
            popper: {
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, -8],
                  },
                },
              ],
            },
          },
        },
        MuiCheckbox: {
          disableRipple: false,
          icon: <CheckBoxOutlineBlankIcon sx={{ color: 'hsla(210, 0%, 0%, 0.0)' }} />,
          checkedIcon: <CheckIcon sx={{ height: 14, width: 14 }} />,
          indeterminateIcon: <RemoveIcon sx={{ height: 14, width: 14 }} />,
        },
        MuiSelect: {
          IconComponent: React.forwardRef<SVGSVGElement, SvgIconProps>((props: any, ref) => (
            <UnfoldMoreIcon fontSize="small" {...props} ref={ref} />
          )),
        },
        MuiLink: {
          underline: 'none',
        },
        MuiAutocomplete: {
          popupIcon: <ExpandMoreIcon />,
        },
        MuiChip: {
          size: 'small',
        },
        MuiAccordion: {
          elevation: 0,
          disableGutters: true,
        },
        MuiPaper: {
          elevation: 0,
        },
      }}
    >
      {children}
    </DefaultPropsProvider>
  );
}
