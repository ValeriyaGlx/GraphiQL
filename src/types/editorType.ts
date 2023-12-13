import type { HEADERS_EDITOR, VARIABLES_EDITOR } from '../constants/editors.ts';

export type EditorType = typeof VARIABLES_EDITOR | typeof HEADERS_EDITOR;
