import { EditorType,SourceType } from '@/typings/store.d';

export const getSource: SourceType = state => state.root.editor.source;