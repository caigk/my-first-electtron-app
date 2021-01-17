export interface SourceType {
	fileName?: string;
	path?: string;
	type: 'md' | 'docx' | 'pdf';
	title?: string;
	content?: string;

}

export interface TargetType {

}

export type AlertType = {
	message:string;
}


export interface EditorType {
	errores: AlertType[],
	source: SourceType,
	target: TargetType
}