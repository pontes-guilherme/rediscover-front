/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import {md3} from 'vuetify/blueprints'
import {componentAliases} from "@/plugins/vuetify/components";
import {defaults} from "@/plugins/vuetify/components";
import {icons} from "@/plugins/vuetify/icons";
import {theme} from "@/plugins/vuetify/themes";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  aliases: componentAliases,
  defaults,
  theme,
  icons,
})
