
/**
 * 原文件store项
 */
export interface SourceType {
	/**
	 * 文件名
	 */
	fileName?: string;

	/**
	 * 路径，含文件名
	 */
	path?: string;

	/**
	 * 文件类型
	 */
	type: 'md' | 'docx' | 'pdf';

	/**
	 * 文件标题
	 */
	title?: string;

	/**
	 * 最初内容
	 */
	content0?:string;

	/**
	 * 肉容
	 */
	content?: string;
}

/**
 * 预览store项
 */
export interface TargetType {

}

export type AlertType = {
	message:string;
}


export declare interface EditorType {
	errores: AlertType[],
	source: SourceType,
	target: TargetType
}