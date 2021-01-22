/**
 * 新建文档
 */
export const ACTION_NEW_DOC = 'ACTION_NEW_DOC';

/**
 * 打开文档
 */
export const EFFECT_OPEN_DOC = 'EFFECT_OPEN_DOC';

/**
 * 打开文档成功
 */
export const ACTION_OPEN_DOC_SUCCESS = 'ACTION_OPEN_DOC_SUCCESS';

/**
 * 编辑文档
 */
export const ACTION_EDITED_DOC = 'ACTION_EDITED_DOC';

/**
 * 保存文档
 */
export const EFFECT_SAVE_DOC = 'EFFECT_SAVE_DOC';

/**
 * 保存文档成功
 */
export const ACTION_SAVE_DOC_SUCCESS = 'ACTION_SAVE_DOC_SUCCESS';

/**
 * 生成文档
 */
export const EFFECT_GENERATE_DOC = 'EFFECT_GENERATE_DOC';

/**
 * 生成文档成功
 */
export const ACTION_GENERATE_DOC_SUCCESS = 'ACTION_GENERATE_DOC_SUCCESS';


/**
 * 报警
 */
export const ACTION_ALERT = 'ACTION_ALERT';

/**
 * 关闭
 */
export const ACTION_CLOSE = 'ACTION_CLOSE';

/**
 * 文档操作
 * 异步saga
 */
export interface IActionSaga{
	/**
	 * 打开文档
	 */
	openDoc():void;

	/**
	 * 保存文档
	 */
	saveDoc():void;

	/**
	 * 生成文档
	 */
	generateDoc():void;

	/**
	 * 关闭窗口
	 */
	close():void;

	/**
	 * 注册侦听器
	 * @param saga 中间件
	 */
	registerWatch(saga:SagaMiddleware):void;
}