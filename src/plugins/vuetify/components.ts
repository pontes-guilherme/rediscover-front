import {VBtn, VSelect} from "vuetify/components";

export const componentAliases = {
  VBtnPrimary: VBtn,
  VBtnSecondary: VBtn,
  VBtnDatatableAction: VBtn,
  VSelectPrimary: VSelect,
}

export const defaults = {
  VTextField: {
    color: 'primary',
    variant: "outlined",
  },
  VFileInput: {
    color: 'primary',
    variant: "outlined",
  },
  VBtn: {
    height: "40px",
  },
  VBtnPrimary: {
    color: 'primary',
    rounded: 'xl',
    height: "40px",
  },
  VBtnSecondary: {
    color: 'secondary',
    rounded: 'xl',
    height: "40px",
  },
  VBtnDatatableAction: {
    color: 'secondary',
    variant: 'plain',
    class: 'pa-0',
  },
  VSelectPrimary: {
    color: 'primary',
    variant: "outlined",
  },
}
